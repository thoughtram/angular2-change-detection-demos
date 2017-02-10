export function toggleClass(el, zone, className = 'checked') {
    const a = el.nativeElement.querySelector('a');
    a.classList.add(className);
    zone.runOutsideAngular(() => {
        setTimeout(() => {
            a.classList.remove(className);
        }, 2000);
    });
}
