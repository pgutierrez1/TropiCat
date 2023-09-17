using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class cat : MonoBehaviour
{
    public float speed;
    public float dash;
    public Rigidbody2D rb;
    bool canDash = true;
    [SerializeField] float startDashTime = 1f;
    [SerializeField] float dashSpeed = 1f;
    float currentDashTime;

    // Start is called before the first frame update
    void Start()
    {
        rb = this.GetComponent<Rigidbody2D>();
    }

    // Update is called once per frame
    void Update()
    {
        rb.velocity = new Vector2(Input.GetAxis("Horizontal"), 0) * speed;

        if (canDash && Input.GetKey(KeyCode.Space))
        {
            if (Input.GetKey(KeyCode.RightArrow)) {
                StartCoroutine(Dash(Vector2.right));
            }

            else if (Input.GetKey(KeyCode.LeftArrow)) {
                StartCoroutine(Dash(Vector2.left));
            }

        }
    }

    IEnumerator Dash(Vector2 direction)
    {
        canDash = false;
        currentDashTime = startDashTime; // Reset the dash timer.
 
        while (currentDashTime > 0f)
        {
            currentDashTime -= Time.deltaTime; // Lower the dash timer each frame.
 
            rb.velocity = direction * dashSpeed; // Dash in the direction that was held down.
            // No need to multiply by Time.DeltaTime here, physics are already consistent across different FPS.
 
            yield return null; // Returns out of the coroutine this frame so we don't hit an infinite loop.
        }
 
        rb.velocity = new Vector2(0f, 0f); // Stop dashing.
 
        canDash = true;
    }
}
