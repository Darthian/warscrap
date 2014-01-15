var target : Transform; //el Objetivo 
var moveSpeed = 3; //velocidad de movimiento 
var rotationSpeed = 3; //Velocidad de rotación  
var myTransform : Transform;  
var velocidadDeAnimacion = moveSpeed*0.3;//Solo si tu objeto esta animado 

function Awake() { 
	myTransform = transform;  
} 
 
function Start() { //Si deseas que siga a otro objeto que no sea el solo comenta esta linea de abajo... 
	target = GameObject.FindWithTag("Player").transform; //target the player  
} 
 
function Update () { //Controlar la animacion en funcion de la velocidad a la que se mueva, si no esta animado tu objeto puedes dejar comentadas estas 3 lineas. 
/*
	for (var state : AnimationState in animation) {  
		state.speed = velocidadDeAnimacion; 
	}*/ //Rotacion para mirar hacia el target(objetivo a seguir) 
	myTransform.rotation = Quaternion.Slerp(myTransform.rotation, Quaternion.LookRotation(target.position - myTransform.position), rotationSpeed*Time.deltaTime);  //Movimiento en dirección del target 
	myTransform.position += myTransform.forward * moveSpeed * Time.deltaTime;   
}