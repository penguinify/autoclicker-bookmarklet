export function style() {
    let styles = document.createElement('style')
styles.textContent = ".autoclicker-selection {position: absolute;border: 2px solid rgba(255, 135, 31, 1);background-color: rgba(255, 135, 31, 0.5);z-index: 1000;pointer-events: none;transition: all 0.3s cubic-bezier(0,.55,.48,.99);}"
document.head.appendChild(styles)
}
