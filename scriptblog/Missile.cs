using System.Collections;
using System.Collections.Generic;
using UnityEngine;




public class Missile : MonoBehaviour
{
    public Vector3 targetV3;
    public Vector3 aVector;
    public float turnStr;
    public float speed;
    //
    private GameObject target;

    // make missle fly in line before targeting set true. If you want tracking immediatly set false.
    private bool initialBurnToggle = true;
    public float initialBurn = 5;

    //timer
    public float timer = 0;

    
 
    
    

    // Start is called before the first frame update
    void Start()
    {
        //set up data
        
        
        

    }

    // Update is called once per frame
    void Update()
    {
        

        

        //set target
        target = GameObject.FindGameObjectWithTag("Enemy");

        //
                                
        //-------flight math-------------
        aVector = targetV3 - transform.position;
        Quaternion aQuat = Quaternion.LookRotation(aVector);
        Quaternion missleQuat = Quaternion.Euler(transform.rotation.eulerAngles);
        targetV3 = new Vector3(target.transform.position.x, target.transform.position.y, target.transform.position.z);






        //-------flight movement---------

        
        if (initialBurnToggle == false) {transform.rotation = Quaternion.LerpUnclamped(missleQuat, aQuat, turnStr / 100);}
        transform.Translate(Vector3.forward * speed * Time.deltaTime, Space.Self);

        

        //-------timer----------
        timer += Time.deltaTime;

        if(timer > timeToLive)
        {
            Destroy(gameObject);
        }
        
        if (timer > initialBurn)
        {
            initialBurnToggle = false;
        }
    }


    private void OnTriggerStay(Collider other)
    {
        if (other.CompareTag("Missle") && initialBurnToggle == false) {
            transform.rotation = Quaternion.LerpUnclamped(Quaternion.Euler(transform.rotation.eulerAngles), Quaternion.Euler(Random.Range(-70f,-10f), Random.Range(-70f, 70f), Random.Range(-70f, -10)), turnStr / 100);
        }
        else if (other.CompareTag("Island") && initialBurnToggle == false)
        {
            Vector3 derp = other.ClosestPoint(transform.position) - transform.position;
            transform.rotation = Quaternion.LerpUnclamped(Quaternion.Euler(transform.rotation.eulerAngles), Quaternion.LookRotation(derp), turnStr / 100);
        }

    }

   

    //------------Payload-----------

    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("Enemy") && initialBurnToggle == false)
        {
            Destroy(other.gameObject);
            
        }
        
        if (initialBurnToggle == false &&  !other.CompareTag("Missile"))
        {
            Destroy(gameObject);
            
        }
    }

    

   

}
