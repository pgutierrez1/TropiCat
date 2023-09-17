using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class ButtonScript : MonoBehaviour
{
    // public void StartButton()
    // {
    //     SceneManager.LoadScene(1);
    // }

    public void LoadByIndex(int sceneIndex)
    {
        SceneManager.LoadScene(sceneIndex);
    }

        public void MenuScreen()
    {
		SceneManager.LoadScene(0);
	}
    
    public void GameManagerScreen()
    {
		SceneManager.LoadScene ("SampleScene");
	}

    public void CreditScreen()
    {
		SceneManager.LoadScene(2);
	}



    public void QuitButton()
    {
        Debug.Log("Quit button Pressed");
        Application.Quit();
    }
}
