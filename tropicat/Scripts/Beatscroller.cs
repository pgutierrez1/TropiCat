//Script that moves the fruits downward -JP

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Beatscroller : MonoBehaviour
{
    public float bpm;

    public bool hasStarted;

    //public float scale; //this will cause the fruits to be faster and farther apart in space
    // scale = 1 / (number of units)

    // Start is called before the first frame update
    
    void Start()
    {
        bpm = bpm / 60f;
    }

    // Update is called once per frame
    void Update()
    {
        if (hasStarted)
        {
            /* if (Input.anyKeyDown)
            {
                hasStarted = true;
            }
            else 
            */

            {
                transform.position -= new Vector3 (0f, bpm * Time.deltaTime * 2, 0f);
            }
        }
    }
}
