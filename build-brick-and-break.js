let brickCount = 0;

export const build = (amount) => {
    const interval = setInterval(() => {
        if (brickCount >= amount) {
            clearInterval(interval);
            return;
        }
        brickCount++;
        const brick = document.createElement('div');
        brick.id = `brick-${brickCount}`;
        if (brickCount % 3 === 2) {
            brick.dataset.foundation = 'true';
        }
        document.body.appendChild(brick);
    }, 100);
};

export const repair = (...ids) => {
    ids.forEach(id => {
        const brick = document.getElementById(id);
        if (brick) {
            if (brick.dataset.foundation === 'true') {
                brick.dataset.repaired = 'in progress';
            } else {
                brick.dataset.repaired = 'true';
            }
        }
    });
};

export const destroy = () => {
    const lastBrick = document.getElementById(`brick-${brickCount}`);
    if (lastBrick) {
        lastBrick.remove();
        brickCount--;
    }
};