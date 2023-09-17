using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class Conductor : MonoBehaviour
{
    public float bpm;
    public float secPerBeat; 
    public float songPosInBeats;
    public float dsptimesong;
    public float offset;
    public float songposition;
    public float deltasongpos;
    public float beatsShownInAdvance;
    public bool playing;

    // we are storing notes in a tuple so that we can store multiple values of position, beat val, and note type
    (float pos, float song_pos, int id) [] notes;
    int nextIndex = 0;




    // Start is called before the first frame update
    void Start()
    {
        secPerBeat = 60 / bpm;

        //start where the song starts
        dsptimesong = (float) AudioSettings.dspTime;

        GetComponent<AudioSource>().Play();
        playing = true;
    }

    // Update is called once per frame
    void Update()
    {
        songPosInBeats = songposition / secPerBeat;
        
        songposition = (float)(AudioSettings.dspTime - dsptimesong) - offset; // missing song.pitch bc im not dealing with that

        //Placeholder: need to put logic for when song is starting
        if (playing == true) {
            //RaiseOnSongStart();
        } 
        

        if (nextIndex < notes.Length && notes[nextIndex].song_pos < songPosInBeats + beatsShownInAdvance)
        {
            // if song is still going, and song pos has reached next note pos, then initialize a fruit from the object pool
            GameObject fruit = ObjectPool.SharedInstance.GetPooledObject();
            if (fruit != null) {
                fruit.SetActive(true); //instantiate
            }


        }

        //initialize the fields of the music note
        
        nextIndex++;

        // send song end event when song is over

        if (nextIndex > notes.Length) {
            playing = false;
            //RaiseOnSongEnd();
        }
}

    

    
    
}
