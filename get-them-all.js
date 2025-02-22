export const getArchitects = () => {
    const architects = Array.from(document.getElementsByTagName('a'));
    const nonArchitects = Array.from(document.querySelectorAll('body *:not(a)'));
    return [architects, nonArchitects];
};

export const getClassical = () => {
    const [architects] = getArchitects();
    const classicalArchitects = architects.filter(arch => arch.classList.contains('classical'));
    const nonClassicalArchitects = architects.filter(arch => !arch.classList.contains('classical'));
    return [classicalArchitects, nonClassicalArchitects];
};

export const getActive = () => {
    const [classicalArchitects] = getClassical();
    const activeClassicalArchitects = classicalArchitects.filter(arch => arch.classList.contains('active'));
    const nonActiveClassicalArchitects = classicalArchitects.filter(arch => !arch.classList.contains('active'));
    return [activeClassicalArchitects, nonActiveClassicalArchitects];
};

export const getBonannoPisano = () => {
    const [activeClassicalArchitects] = getActive();
    const bonannoPisano = document.getElementById('BonannoPisano');
    const remainingActiveClassicalArchitects = activeClassicalArchitects.filter(arch => arch.id !== 'BonannoPisano');
    return [bonannoPisano, remainingActiveClassicalArchitects];
};