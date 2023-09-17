/*
    DIG 3878 Spring 2023
    Jennifer Purington
    Game Controller
    Randi Faris

    Program that exists program when "esc" key is pressed
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Game_Controller : MonoBehaviour
{
	// Update is called once per frame
	void Update()
	{
		if (Input.GetKey("escape"))
			Application.Quit();
	}
}
