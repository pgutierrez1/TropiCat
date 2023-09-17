using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Coconut_sprite : MonoBehaviour
{
     private SpriteRenderer spriteRenderer;
    [SerializeField] private Sprite coconut;
    [SerializeField] private Sprite coconut_smash;

    private void Awake()
    {
        // References need components
        spriteRenderer = GetComponent<SpriteRenderer>(); 
    }

    public void OnTriggerEnter2D(Collider2D other)
            {
                if (other.tag == "ground")
                {
                    spriteRenderer.sprite = coconut_smash;
                    Game_Manager.instance.NoteMissed();
                    gameObject.SetActive(false); 
                }
            }
}
      