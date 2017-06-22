import Game from './Game/Game';
import HtmlRenderer from './Renderer/HtmlRenderer';
import CanvasRenderer from './Renderer/CanvasRenderer';
import CssRenderer from './Renderer/CssRenderer';
import Figure from './Figures/Figure';
import figures from './Figures/templates';
import {INITIAL_CYCLE_PERIOD, MIN_CYCLE_PERIOD, MAX_CYCLE_PERIOD} from './config';

class App {

  constructor() {
    this._renderer = null;
    this._game = null;
    this._avaliableRenderers = {
      'Html Renderer': HtmlRenderer,
      'Canvas Renderer': CanvasRenderer,
      'Css Renderer': CssRenderer
    };

    this._showRendererVariants();
    this._setUpAppBindings();
  }

  /**
   * Show available render methods
   * @private
   */
  _showRendererVariants() {

    let renderersList = Object.keys(this._avaliableRenderers);
    let rendererMenu = document.querySelector('.renderer-menu');
    let rendererList = document.createElement('ul');

    rendererList.className = 'renderer-list';

    renderersList.forEach(renderer => {
      let item = document.createElement('li');
      item.className = 'renderer-item';
      item.setAttribute('data-renderer', renderer);
      item.innerHTML = renderer;
      rendererList.appendChild(item);
    });

    rendererMenu.appendChild(rendererList);

  }

  /**
   * Set up binding which are needed for the app initializing
   * @private
   */
  _setUpAppBindings() {

    let list = document.querySelectorAll('.renderer-item');

    list.forEach(item => {
      item.addEventListener('click', (e) => {
        this._setRenderer(new this._avaliableRenderers[e.target.getAttribute('data-renderer')]());
        let menu = document.querySelector('.renderer-menu');
        menu.parentNode.removeChild(menu);
        document.querySelector('.panel').className += ' __visible';
      });
    });

  }

  /**
   * Set chosen app renderer
   * @param {AbstractRenderer} renderer
   * @private
   */
  _setRenderer(renderer) {
    this._renderer = renderer;
    this._renderer.mountTo(document.querySelector('#game'));
    this._initGame();
    this._setUpGameBindings();
    this._initFiguresSelect();
  }

  /**
   * Create game instance
   * @private
   */
  _initGame() {
    this._game = new Game(this._renderer);
  }

  /**
   * Set up bindings which are needed for game control
   * @private
   */
  _setUpGameBindings() {

    let cyclePeriodInput = document.querySelector('.js-period-input');
    let cyclePeriodOutput = document.querySelector('.js-period-output');

    cyclePeriodInput.setAttribute('min', MIN_CYCLE_PERIOD);
    cyclePeriodInput.setAttribute('max', MAX_CYCLE_PERIOD);
    cyclePeriodInput.setAttribute('step', MIN_CYCLE_PERIOD);
    cyclePeriodInput.value = INITIAL_CYCLE_PERIOD;
    cyclePeriodOutput.innerHTML = `Cycle duration: ${INITIAL_CYCLE_PERIOD} (ms)`;

    cyclePeriodInput.addEventListener('change', (e) => {
      this._game.setCyclePeriod(e.target.value);
      cyclePeriodOutput.innerHTML = `Cycle duration: ${e.target.value} (ms)`;
    });

    document.querySelector('.js-start-button').addEventListener('click', () => {
      this._game.start();
    });

    document.querySelector('.js-pause-button').addEventListener('click', () => {
      this._game.pause();
    });

    document.querySelector('.js-stop-button').addEventListener('click', () => {
      this._game.stop();
    });

    document.querySelector('.js-clear-button').addEventListener('click', () => {
      this._game.clear();
    });

    document.querySelector('.js-fill-button').addEventListener('click', () => {
      this._game.fill();
    });

    document.querySelector('.js-backward-button').addEventListener('click', () => {
      this._game.backward();
    });

    document.querySelector('.js-forward-button').addEventListener('click', () => {
      this._game.forward();
    });

    document.querySelector('.js-clean-history-button').addEventListener('click', () => {
      this._game.cleanUpHistory();
    });

  }

  /**
   * Show figures select
   * @private
   */
  _initFiguresSelect() {
    let figuresList = [];

    for (let key in figures) {
      if (figures.hasOwnProperty(key)) {
        figuresList.push({
          label: key.replace(/_/g, ' ').replace(/\$/g, '-'),
          value: key
        })
      }
    }

    let figuresOptions = document.createDocumentFragment();

    figuresList.forEach(figure => {
      let option = document.createElement('option');
      option.setAttribute('value', figure.value);
      option.innerHTML = figure.label;
      figuresOptions.appendChild(option);
    });

    let select = document.querySelector('.js-figure-select');
    select.appendChild(figuresOptions);
    select.addEventListener('change', (e) => {
      this._game.insertFigure(new Figure(figures[e.target.value]));
    });
  }

}

new App();