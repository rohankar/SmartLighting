var net = require('net');

var HOST = '127.0.0.1';
var PORT = 6969;

var client = new net.Socket();
var client = new net.Socket();
client.connect(PORT, HOST, function() 
                           {
                              console.log('CONNECTED TO: ' + HOST + ':' + PORT); 

                              process.stdin.on('readable', function() 
			     			 	                                         {
  		             		 			                                   var chunk = process.stdin.read();
  			        				                                       if (chunk !== null)
								                                               {
	    								                                            client.write(chunk);
  								                                             }
			      			 	                                       });
			                        
                              client.on('data', function(data)
                  	      			                {
    							                                  console.log('Server:' + data);
		                  	                        });  
			                        
                              client.on('close', function()
                                                 {
                                                    console.log('Connection closed');
                                                 });

                           });
