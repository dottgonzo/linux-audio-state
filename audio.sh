#! /bin/bash





channelck=0

  

papact(){

cc_name=$1

pacmd list-sources | grep -v "$cc_name.monitor" | grep "$cc_name" -A10000 | grep -v "=" | grep ":" | grep input  | grep -v "name:" | while read line
do


if [[ $(echo $line | grep -c 'active port:') == 1 ]];then

break
fi

c_in=$(echo $line | awk '{print($1)}'|sed -s 's/://g')

if [[ $(pacmd list-sources | grep "active port:" | grep -c "$c_in") > 0 ]]; then
c_active='true'
else
c_active='false'
fi

ch_tmp='{"dev":"'$c_in'","active":'$c_active'}'

if [[ $channelck == 0 ]];then
echo -n "$ch_tmp"
channelck=1
else
echo -n ",$ch_tmp"
fi
    done 


}








for (( a=0; a<$(pactl list short sources | grep -c ''); a++ )); do


		



		aad=$(( $a + 1 ))

        pulse_name=$(pactl list short sources | sed -n $aad''p | awk '{print($2)}')

if [[ $(echo $pulse_name|grep -c 'monitor') < 1 ]]; then

		alabel=$(pactl list sources | grep -v "monitor" | grep alsa.card_name | sed -s "s/^.*alsa.card_name = //g" | sed -s 's/"//g'  | sed -n $aad''p)

		avendor=$(pactl list sources| grep -v "monitor"  | grep device.vendor.id | sed -s "s/^.*device.vendor.id = //g" | sed -s 's/"//g' | sed -n $aad''p)
		
aproduct=$(pactl list sources | grep -v "monitor"  | grep device.product.id | sed -s "s/^.*device.product.id = //g" | sed -s 's/"//g' | sed -n $aad''p)

adev="$avendor:$aproduct"


        
        if [[ $(pactl list short sources | grep "$pulse_name" | grep -c -v SUSPENDED) > 0 ]] ; then
a_active='true'
else
a_active='false'
fi


        audioin='{"label":"'$alabel'","dev":"'$adev'","pulsename":"'$pulse_name'","active":'$a_active',"channels":['$(echo $(papact "$pulse_name"))']}'

		if [[ "$audioins" ]]; then
		audioins="$audioins,$audioin"
		else
		audioins="$audioin"
		fi

fi



	
done


echo "[$audioins]"
