<?php                      
        include_once('waStaticFunction.php');         
        include_once('waErrorFunction.php');          

        function waSendMail($to,$title,$mess,$reply_to="") 
        {     
if (strlen($to)==0) $to = ""; 
        if (strlen($to)==0)      
            {     
            waSetError('No email');     
            return false;     
            }     
        $headers= "";     
             
        if (strlen($reply_to)>0){
        waAddToMailHeader('Reply-To',$reply_to,''); 
        }
        if (strlen($to)>0){     
            $headers=str_replace('[mail]',$to,$headers);     
            }     
        $add_headers= "";     

        if (strlen($to)>0){     
        $add_headers=str_replace('[mail]',$to,$add_headers);     
        if ((strlen($add_headers)>0) && mail($to,$title,$mess,$headers,$add_headers)) return true;     
        $res= mail($to,$title,$mess,$headers);     
        return $res;     
        }     
        }
