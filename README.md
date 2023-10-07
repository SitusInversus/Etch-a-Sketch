This Project is to train DOM manipulation. It is part of the Odin-Project curriculum "https://www.theodinproject.com/lessons/foundations-etch-a-sketch"

The Task is to create a webpage with a 16x16 grid of square divs.

Requirements: 

    - Create the divs using JavaScript
    - You need to make the divs appear as a grid

Approach:

    1. create index.html, etchASketch.js, etchASketch.css
    2. link script and stylesheet to index.html
    3. Think about how to create a 16x16 grid of square divs and how to break the task down

        Brainstorming Grid:
            - Grid: width = w, heigth = w, flexbox, id = "grid"
                    use flexbox
            - square divs: width=height= s,  w/a=s with a = 16, class = "squaredivs"
                    use flexbox; flex-wrap: wrap;

        Website Layout: 
            - Header, Main Content contains Grid, Footer
            - 1 column layout
            - * { box-sizing: border-box; }
    
