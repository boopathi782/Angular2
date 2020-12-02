$(document).ready(function(){
   /// $('.ui-timepicker ui-widget ui-widget-content ui-menu ui-corner-all').timepicker({ zindex: 9999999});
    //console.log("HI");
    $('#from-time').timepicker({
        //timeFormat: 'hh:mm:ss',
        timeFormat: 'HH:mm',
        minTime: '09:00',
        maxTime: '11:30', 
        // startTime: new Date(0,0,0,09,0,0), // 3:00:00 PM - noon
        //startTime: new Date(),
        interval: 30, 
        change: function(time) {
            // the input field
            var element = $(this), text;
            // get access to this Timepicker instance
            var timepicker = element.timepicker(); 
            var endTime = new Date(time.getTime() + 30*60000); 
            //console.log(endTime);
            $('#to-time').val(timepicker.format(endTime));

            $("#from-time")[0].dispatchEvent(new Event("input", { bubbles: true })); 
            $("#to-time")[0].dispatchEvent(new Event("input", { bubbles: true })); 
        }         
    });


    $('#to-time').timepicker({
        //timeFormat: 'hh:mm:ss',
        timeFormat: 'HH:mm',
        minTime: '09:30',
        maxTime: '12:00', 
        interval: 30,
        change: function(time) {
            // the input field
            var element = $(this), text;
            // get access to this Timepicker instance
            var timepicker = element.timepicker();

            var endTime = new Date(time.getTime() - 30*60000);            
            $('#from-time').val(timepicker.format(endTime));

            $("#from-time")[0].dispatchEvent(new Event("input", { bubbles: true })); 
            $("#to-time")[0].dispatchEvent(new Event("input", { bubbles: true })); 

           
        } 
    }); 



    
    $('#evening-from-time').timepicker({     
        timeFormat: 'HH:mm',
        minTime: '17:00',
        maxTime: '20:30', 
        interval: 30, 
        dynamic: true,
        change: function(time) {
            // the input field
            var element = $(this), text;
            // get access to this Timepicker instance
            var timepicker = element.timepicker(); 
            var endTime = new Date(time.getTime() + 30*60000); 
            //console.log(endTime);
            $('#evening-to-time').val(timepicker.format(endTime));
           
            $("#evening-from-time")[0].dispatchEvent(new Event("input", { bubbles: true })); 
            $("#evening-to-time")[0].dispatchEvent(new Event("input", { bubbles: true })); 

           
        }         
    });

 //evening time 
    $('#evening-to-time').timepicker({     
        timeFormat: 'HH:mm',
        minTime: '17:30',
        maxTime: '21:00', 
        interval: 30,
        dynamic: true,
        change: function(time) {
            // the input field
            var element = $(this), text;
            // get access to this Timepicker instance
            var timepicker = element.timepicker();

            var endTime = new Date(time.getTime() - 30*60000);            
            $('#evening-from-time').val(timepicker.format(endTime));

            $("#evening-to-time")[0].dispatchEvent(new Event("input", { bubbles: true })); 
            $("#evening-from-time")[0].dispatchEvent(new Event("input", { bubbles: true })); 
        } 
    }); 


}); 