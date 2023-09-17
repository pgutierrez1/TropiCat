using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class fruit : MonoBehaviour
{
    public float speed;
    public enum FruitType {Coconut, Pineapple, Starfruit, Orange};
    private SpriteRenderer spriteRenderer;
    private FruitType fruitType;

     // Sprites
    [SerializeField] private Sprite coconut;
    [SerializeField] private Sprite coconut_smash;
    [SerializeField] private Sprite starfruit;
    [SerializeField] private Sprite starfruit_smash;
    [SerializeField] private Sprite orange;
    [SerializeField] private Sprite orange_smash;
    [SerializeField] private Sprite pineapple;
    [SerializeField] private Sprite pineapple_smash;

    private void Awake()
    {
        // References need components
        spriteRenderer = GetComponent<SpriteRenderer>(); 
    }

    // Start is called before the first frame update
    void Start()
    {
        fruitType = FruitType.Coconut;
    }

    // Update is called once per frame
    void Update()
    {
 
    }

    public void OnTriggerEnter2D(Collider2D other)
    {
        if (other.tag == "basket")
        {
            gameObject.SetActive(false); 
            Game_Manager.instance.NoteHit();
            
        }
        
       else if (other.tag == "ground") 
        {
            Debug.Log(fruitType);
            switch (fruitType)
            {
                case FruitType.Coconut:
                    spriteRenderer.sprite = coconut_smash;
                     gameObject.SetActive(false); 
                     Game_Manager.instance.NoteMissed();
                    break;

                case FruitType.Pineapple:
                        spriteRenderer.sprite = pineapple_smash;
                        gameObject.SetActive(false); 
                        Game_Manager.instance.NoteMissed();
                        break;

                case FruitType.Starfruit:
                        spriteRenderer.sprite = starfruit_smash;
                        gameObject.SetActive(false); 
                        Game_Manager.instance.NoteMissed();
                        break;

                case FruitType.Orange:
                        spriteRenderer.sprite = orange_smash;
                        gameObject.SetActive(false); 
                        Game_Manager.instance.NoteMissed();
                        break;
                // default:
                //     Game_Manager.instance.NoteMissed();
                
            }
            
        }
         
        
        Debug.Log(Game_Manager.instance.combo);
    }

}

