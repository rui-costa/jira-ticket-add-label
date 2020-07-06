
    //add material design style for button
    var link = document.createElement( "link" );
    link.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "screen,print";
    document.getElementsByTagName( "head" )[0].appendChild( link );

    //function to add the label
    function add_label(){
        label = "Done"
        document.querySelectorAll(".labels-wrap")[0].querySelectorAll(".overlay-icon")[0].click()
        document.getElementById("labels-textarea").value = label;

        setTimeout(function(){ 
            document.getElementById("labels-textarea").click();
            setTimeout(function(){ 
                document.getElementById("suggestions").querySelectorAll("b")[0].click();
                setTimeout(function(){ 
                    document.querySelectorAll(".save-options")[0].querySelectorAll(".submit")[0].click()
                }, 100);
            }, 500);
        }, 200);
    }

    //function to initialize the button on jira board view
    function init_board(){

        var main = document.getElementById("ghx-quick-filters").childNodes[0];
        if(main === null || main == undefined ){
            ms = 500
            console.log("DONE LABEL EXTENSION : Not loaded yet, trying in "+ms+" mileseconds");
            setTimeout(init_board,ms);
        }else{
            //add button    
            var button_done = document.createElement("BUTTON"); 
            button_done.innerHTML = '<span class="material-icons">check_circle_outline</span>';
            button_done.setAttribute("id", "button_done");
            button_done.setAttribute("class", "aui-button aui-button-primary");
            button_done.setAttribute("title", "Done");
            main.appendChild(button_done);
            document.getElementById("button_done").addEventListener("click", add_label);
            document.getElementById("button_done").style.marginRight = "2px";
        }
    }

    //function to initialize the button on jira issue view
    function init_issue(){

        var main = document.getElementsByClassName("toolbar-split toolbar-split-left")[0];
        if(main === null || main == undefined ){
            ms = 500
            console.log("DONE LABEL EXTENSION : Not loaded yet, trying in "+ms+" mileseconds");
            setTimeout(init_issue,ms);
        }else{
           //add button    
            var button_done = document.createElement("BUTTON"); 
            button_done.innerHTML = '<span class="material-icons">check_circle_outline</span>';
            button_done.setAttribute("id", "button_done");
            button_done.setAttribute("class", "aui-button aui-button-primary");
            button_done.setAttribute("title", "Done");
            main.appendChild(button_done);
            document.getElementById("button_done").addEventListener("click", add_label);
            document.getElementById("button_done").style.marginRight = "2px";
        }
    }

    //check if in board view
    if(window.location.href.match(/atlassian.net\/secure\/RapidBoard.jspa/) != null){
        init_board();
    } 

    //check if in issue view
    if(window.location.href.match(/atlassian.net\/browse\//) != null){
        init_issue();
    }