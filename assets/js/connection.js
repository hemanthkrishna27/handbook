/*function MQTTconnect() {
	document.getElementById("messages").innerHTML ="";
	var s = host;
	var p = port;
	if (p!="")
	{
	console.log("ports");
		port=parseInt(p);
		console.log("port" +port);
	}
	if (s!="")
	{
		
		console.log("host");
	}


	console.log("connecting to "+ host +" "+ port);
	mqtt = new Paho.MQTT.Client(host,port,"myclientid_");
	var options = {
        timeout: 3,
		onSuccess: onConnect,
		onFailure: onFailure,
      
     };
	
        mqtt.onConnectionLost = onConnectionLost;
        mqtt.onMessageArrived = onMessageArrived;
		mqtt.onConnected = onConnected;

	mqtt.connect(options);
	return false;
  
 
	}*/

function send_message0(){
		document.getElementById("messages").innerHTML ="";
		if (connected_flag==0){
		out_msg="<b>Not Connected so can't send</b>"
		console.log(out_msg);
		document.getElementById("message").innerHTML = out_msg;
		return false;
		}
		var msg = "1";
		console.log(msg);

		var topic = "inTopic";
		message = new Paho.MQTT.Message(msg);
		if (topic=="")
			message.destinationName = "test-topic"
		else
			message.destinationName = topic;
		mqtt.send(message);
		return false;
    }
    function send_message1(){
		document.getElementById("messages").innerHTML ="";
		if (connected_flag==0){
		out_msg="<b>Not Connected so can't send</b>"
		console.log(out_msg);
		document.getElementById("messages").innerHTML = out_msg;
		return false;
		}
		var msg = "0";
		console.log(msg);

		var topic = "inTopic";
		message = new Paho.MQTT.Message(msg);
		if (topic=="")
			message.destinationName = "test-topic"
		else
			message.destinationName = topic;
		mqtt.send(message);
		return false;
    }
    function send_message2(){
		document.getElementById("messages").innerHTML ="";
		if (connected_flag==0){
		out_msg="<b>Not Connected so can't send</b>"
		console.log(out_msg);
		document.getElementById("messages").innerHTML = out_msg;
		return false;
		}
		var msg ="2";
		console.log(msg);

		var topic = "inTopic";
		message = new Paho.MQTT.Message(msg);
		if (topic=="")
			message.destinationName = "test-topic"
		else
			message.destinationName = topic;
		mqtt.send(message);
		return false;
    }
    function send_message3(){
		document.getElementById("messages").innerHTML ="";
		if (connected_flag==0){
		out_msg="<b>Not Connected so can't send</b>"
		console.log(out_msg);
		document.getElementById("messages").innerHTML = out_msg;
		return false;
		}
		var msg ="3";
		console.log(msg);

		var topic = "inTopic";
		message = new Paho.MQTT.Message(msg);
		if (topic=="")
			message.destinationName = "test-topic"
		else
			message.destinationName = topic;
		mqtt.send(message);
		return false;
    }
    function send_message4(){
		document.getElementById("messages").innerHTML ="";
		if (connected_flag==0){
		out_msg="<b>Not Connected so can't send</b>"
		console.log(out_msg);
		document.getElementById("messages").innerHTML = out_msg;
		return false;
		}
		var msg = "4";
		console.log(msg);

		var topic = "inTopic";
		message = new Paho.MQTT.Message(msg);
		if (topic=="")
			message.destinationName = "test-topic"
		else
			message.destinationName = topic;
		mqtt.send(message);
		return false;
    }
    function send_message5(){
		document.getElementById("messages").innerHTML ="";
		if (connected_flag==0){
		out_msg="<b>Not Connected so can't send</b>"
		console.log(out_msg);
		document.getElementById("messages").innerHTML = out_msg;
		return false;
		}
		var msg = "5";
		console.log(msg);

		var topic = "inTopic";
		message = new Paho.MQTT.Message(msg);
		if (topic=="")
			message.destinationName = "test-topic"
		else
			message.destinationName = topic;
		mqtt.send(message);
		return false;
    }
    function send_message6(){
		document.getElementById("messages").innerHTML ="";
		if (connected_flag==0){
		out_msg="<b>Not Connected so can't send</b>"
		console.log(out_msg);
		document.getElementById("messages").innerHTML = out_msg;
		return false;
		}
		var msg = "6";
		console.log(msg);

		var topic = "inTopic";
		message = new Paho.MQTT.Message(msg);
		if (topic=="")
			message.destinationName = "test-topic"
		else
			message.destinationName = topic;
		mqtt.send(message);
		return false;
    }
    function send_message7(){
		document.getElementById("messages").innerHTML ="";
		if (connected_flag==0){
		out_msg="<b>Not Connected so can't send</b>"
		console.log(out_msg);
		document.getElementById("messages").innerHTML = out_msg;
		return false;
		}
		var msg ="7";
		console.log(msg);

		var topic = "inTopic";
		message = new Paho.MQTT.Message(msg);
		if (topic=="")
			message.destinationName = "test-topic"
		else
			message.destinationName = topic;
		mqtt.send(message);
		return false;
	}
	    function send_message8(){
		document.getElementById("messages").innerHTML ="";
		if (connected_flag==0){
		out_msg="<b>Not Connected so can't send</b>"
		console.log(out_msg);
		document.getElementById("messages").innerHTML = out_msg;
		return false;
		}
		var msg = "8";
		console.log(msg);

		var topic = "inTopic";
		message = new Paho.MQTT.Message(msg);
		if (topic=="")
			message.destinationName = "test-topic"
		else
			message.destinationName = topic;
		mqtt.send(message);
		return false;
	}
	    function send_message9(){
		document.getElementById("messages").innerHTML ="";
		if (connected_flag==0){
		out_msg="<b>Not Connected so can't send</b>"
		console.log(out_msg);
		document.getElementById("messages").innerHTML = out_msg;
		return false;
		}
		var msg = "9";
		console.log(msg);

		var topic = "inTopic";
		message = new Paho.MQTT.Message(msg);
		if (topic=="")
			message.destinationName = "test-topic"
		else
			message.destinationName = topic;
		mqtt.send(message);
		return false;
	}
