let theme = localStorage.getItem('theme');

if(theme == null){
    setTheme('light')
}else{
    setTheme(theme)
}

let themesDots = document.getElementsByClassName('theme-dot')

for(var i = 0; themesDots.length > i; i++) {
    themesDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('Option clicked', mode)
        setTheme(mode);
    })
}

function setTheme(mode){
    if(mode == 'light'){
        document.getElementById('theme-style').href = 'default.css'
    }
    
    if(mode == 'blue'){
        document.getElementById('theme-style').href = 'blue.css'
    }
    
    if(mode == 'orange'){
        document.getElementById('theme-style').href = 'orange.css'
    }
    
    if(mode == 'purple'){
        document.getElementById('theme-style').href = 'purple.css'
    }
    localStorage.setItem('theme', mode)
}