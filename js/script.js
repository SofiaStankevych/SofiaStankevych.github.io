document.addEventListener('DOMContentLoaded', function(){
    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent= document.querySelectorAll('.tabcontent');
    const tabsParent = document.querySelector('.tabheader__items');
    

    //ховає
    function hideTab(){ 
        tabsContent.forEach(tab =>{
            tab.classList.add('hide');
            tab.classList.remove('fade');


        });
        tabsContent.forEach(tab =>{
            tab.classList.remove('tabheader__item_active');
            
        });
    }


    //показує
    function showTab(i){
        tabsContent[i].classList.remove('hide');
        tabsContent[i].classList.add('fade');

        tabs[i].classList.add('tabheader__item_active');
    }
    

    //при натисканні
    tabsParent.addEventListener('click', function(event){
        const target = event.target;

        if(target && target.classList.contains('tabheader__item')){
            tabs.forEach(function(item, i){
                if( target == item){
                    hideTab();
                    showTab(i);
                }
            });
        }


    });
       
















});

