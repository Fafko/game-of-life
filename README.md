#Game of Life

In order to run the game: 

1. Open `index.html` in your browser.
2. Choose one of the available render methods.
3. Fill the world (randomly, manually or choose one of the available figures). 
4. Press **Start**.

Current implementation features:

1. The world which consists of 200*200 cells and can be displayed with three different ways.
2. The world can be filled randomly by clicking the **Fill The World** button. Alive cell probability ~ 35%.
3. The world can be cleared with the **Clear The World** button.
4. You can control the game process with the **Start**, **Pause** and **Stop** buttons.
5. You can control the game cycle duration with the corresponding slider.
6. Cell's state can be toggled by clicking on cell.
7. You can navigate forward and backward on the history with the corresponding buttons **Forward** and **Backward**.
    When the button **Stop** is pressed - all previous history is deleted because we reset the game to its initial state.
    When history records number is more than 1000 - You will be suggested to clean up the history with the 
    **Clean Up History** button.
8. You can paste some popular patterns into the world
    (The world will be cleared and chosen pattern will be placed on the center of the world.)
    The pattern will be pasted if you choose it in the **Choose a figure to insert...** list.
    Available patterns are stored in text format in the `./src/js/Figures/templates/` folder.
    You can add your own patterns to the game. You should create new file with your 
    pattern and save it to the corresponding folder, after that you should add this file to the register 
    in the `./src/js/Figures/templates.js` file. After that you should rebuild the project.
    
In order to rebuild the project you need to install all dependencies `npm i` and 
run `npm run build`.