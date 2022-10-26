
        let word = ["var", "html", "css", "js", "nodejs", "reactjs", "array", "pointer", "coder", "bug"];

        let meaning = ["container for storing value",
            "hypertext markup language to create webpage",
            "special kind of lang used style webpages",
            "a programming lang used to create dynamic webpage",
            "js runtime environment used for backend",
            "js library to create single page app",
            "special varible to store multiple values",
            "a varible which is used to store the address of variable",
            "who write code",
            "error"];

        let dis_word = document.getElementById("words");

        for (let i = 0; i < 10; i++) {
            dis_word.innerHTML += `<li> ${word[i]} </li>`;
        }

        let output;

        function search() {
            let input = document.getElementById("input").value;
            let nmatch=0;

            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    if (word[i] == input) {
                        nmatch++;
                        output=`Meaning is :  ${meaning[i]}`;
                    }


                if(nmatch==0){
                    output="Sorry these word is not available in our dictionary";
                }
                  
                }
               
            }

            document.getElementById("result").innerHTML=output;
        }

