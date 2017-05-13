<?php
$query = $_REQUEST["query"];

//$max = rand(5, 10);
$results = array();
$myArray = array(
	array('first_name' =>"John",'last_name' =>'Doe','address' => 'las vegas','buget_billng' => 'yes' ,'credit' => 10 ,'email' => 'john@gmail.com','account' => 'A530841','lastbalenceDate' => '10/17/2017' ,'lastBalanceDue' => 100,'lat' => "36.1699",'lng'=>"-115.1398", 'n' =>12,'AccountStatus' => 'OPENED','CollectionStatus'=>'yes','lastpayementDate'=>'5/11/17','lastpayementDue'=>'100','paperlessflag'=> "yes",'bugetbillingblog' => 'yes'),
	array('first_name' =>"Joe",'last_name' =>'Mie','address' => 'columbus','buget_billng' => 'no' ,'credit' => 15 ,'email' => 'ray@gmail.com','account' => 'A538841','lastbalenceDate' => '10/19/2017' ,'lastBalanceDue' => 500,'lat' => "39.9612",'lng'=>"-82.9988",'n' =>13,'AccountStatus' => 'CLOSED','CollectionStatus'=>'yes','lastpayementDate'=>'5/12/17','lastpayementDue'=>'200','paperlessflag'=> "no",'bugetbillingblog' => 'no'),
	array('first_name' =>"Tim",'last_name' =>'Albe','address' => 'new york','buget_billng' => 'no' ,'credit' => 20 ,'email' => 'heart@gmail.com','account' => 'A540841','lastbalenceDate' => '10/18/2017' ,'lastBalanceDue' => 800,'lat' => "40.7128",'lng'=> "-74.0059",'n' =>16,'AccountStatus' => 'OPENED','CollectionStatus'=>'yes','lastpayementDate'=>'5/13/17','lastpayementDue'=>'400','paperlessflag'=> "yes",'bugetbillingblog' => 'no')
  );
$matches = array();
foreach($myArray as $k=>$v) {

        foreach ($v as $key => $value) {
        	//echo $value."<br>";

        	if(preg_match("/$query/i", $value))
        	{
        		array_push($matches,$v);
        		break;
        	}	
        }
        //print_r($v);

 }




/*print_r($matches);*/
echo json_encode(array('users' => $matches));
?>