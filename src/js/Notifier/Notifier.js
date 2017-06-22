import Notification from './Notification';

class Notifier {

  constructor() {
    this._node = document.createElement('ul');
    this._node.className = 'notifier';
    document.querySelector('body').appendChild(this._node);
  }

  /**
   * Show info message
   * @param {string} message
   * @param {number} timeout
   */
  showInfo(message, timeout) {
    this._notify(message, 'info', timeout);
  }

  /**
   * Show warning message
   * @param {string} message
   * @param {number} timeout
   */
  showWarning(message, timeout) {
    this._notify(message, 'warning', timeout);
  }

  /**
   * Show error message
   * @param {string} message
   * @param {number} timeout
   */
  showError(message, timeout) {
    this._notify(message, 'error', timeout);
  }

  /**
   * Create and handle Notification instance
   * @param {string} message
   * @param {string} level
   * @param {number} timeout
   * @private
   */
  _notify(message, level, timeout) {

    let notification = new Notification(message, level);
    this._node.appendChild(notification.getNode());
    let notificationTimeout;

    if (timeout) {
      notificationTimeout = setTimeout(() => {
        notification.prepareToDie().then(() => {
          this._node.removeChild(notification.getNode());
        });
      }, timeout);
    }

    notification.onClick(() => {
      clearTimeout(notificationTimeout);
      notification.prepareToDie().then(() => {
        this._node.removeChild(notification.getNode());
      });
    });

  }

}

export default new Notifier();