// This script checks to see if the fruit is good or rotten, if rotten when caught it is considered "wrong"
// CURRENTLY UNUSED
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FruitQuality : MonoBehaviour
{
    public bool canBePressed; 

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (canBePressed)
        {
            gameObject.SetActive(false); 
        }
    }

    private void OnTriggerEnter2D(Collider2D other)
    {
        if (other.tag == "GoodFruit")
        {
            canBePressed = true; 
        }
    }

    private void OnTriggerExit2D(Collider2D other)
    {
        if (other.tag == "BadFruit")
        {
            canBePressed = false; 
        }
    }
}
