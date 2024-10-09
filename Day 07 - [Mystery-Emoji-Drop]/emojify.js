document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', addEmoji);
});

function addEmoji() {
    const emojis = [
        '😈', '👻', '🎃', '💀', '👹', '👽', '🧛‍♂️', '🧟‍♀️', '😀', '😃',
        '😄', '😁', '😆', '😅', '😂', '🤣', '🥲', '😊', '😇', '🙂', '🙃',
        '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚', '😋', '😜', '😝', '😛',
        '🤑', '🤗', '🤭', '🤫', '🤔', '🤐', '😐', '😑', '😶', '😏', '😒', '🙄',
        '😬', '🤥', '😌', '😔', '😪', '🤤', '😴', '😷', '🤒', '🤕', '🤢', '🤮',
        '🤧', '🥵', '🥶', '🥴', '😵', '🤯', '🤠', '🥳', '😎', '🤓', '🧐', '😕',
        '😟', '🙁', '☹️', '😮', '😯', '😲', '😳', '🥺', '😦', '😧', '😨', '😰',
        '😥', '😢', '😭', '😱', '😖', '😣', '😞', '😓', '😩', '😫', '🥱', '😤',
        '😡', '😠', '🤬', '😈', '👿', '💀', '☠️', '👽', '👾', '🤖', '🎃', '😺',
        '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾', '👶', '🧒', '👦', '👧',
        '🧑', '👩', '👨', '🧔', '👱‍♂️', '👱‍♀️', '👨‍🦰', '👩‍🦰', '👨‍🦱', '👩‍🦱',
        '👨‍🦳', '👩‍🦳', '👨‍🦲', '👩‍🦲', '🧓', '👴', '👵', '👲', '👳‍♂️', '👳‍♀️',
        '🧕', '👮‍♂️', '👮‍♀️', '👷‍♂️', '👷‍♀️', '💂‍♂️', '💂‍♀️', '🕵️‍♂️', '🕵️‍♀️',
        '👩‍⚕️', '👨‍⚕️', '👩‍🌾', '👨‍🌾', '👩‍🍳', '👨‍🍳', '👩‍🎓', '👨‍🎓', '👩‍🎤',
        '👨‍🎤', '👩‍🏫', '👨‍🏫', '👩‍🏭', '👨‍🏭', '👩‍💻', '👨‍💻', '👩‍💼', '👨‍💼',
        '👩‍🔧', '👨‍🔧', '👩‍🔬', '👨‍🔬', '👩‍🚀', '👨‍🚀', '👩‍🚒', '👨‍🚒', '🧙‍♀️',
        '🧙‍♂️', '🧝‍♀️', '🧝‍♂️', '🧛‍♀️', '🧛‍♂️', '🧟‍♀️', '🧟‍♂️', '🧞‍♀️',
        '🧞‍♂️', '🧜‍♀️', '🧜‍♂️', '🧚‍♀️', '🧚‍♂️', '👼', '🤰', '🤱', '👩‍🍼',
        '👨‍🍼', '🙇‍♀️', '🙇‍♂️', '💁‍♀️', '💁‍♂️', '🙅‍♀️', '🙅‍♂️', '🙆‍♀️', '🙆‍♂️',
        '🙋‍♀️', '🙋‍♂️', '🤦‍♀️', '🤦‍♂️', '🤷‍♀️', '🤷‍♂️', '🙎‍♀️', '🙎‍♂️',
        '🙍‍♀️', '🙍‍♂️', '💇‍♀️', '💇‍♂️', '💆‍♀️', '💆‍♂️', '🧖‍♀️', '🧖‍♂️', '💅',
        '🤳', '💃', '🕺', '👯‍♀️', '👯‍♂️', '🕴️', '👩‍🦽', '👨‍🦽', '👩‍🦼', '👨‍🦼',
        '👩‍🦯', '👨‍🦯', '🧎‍♀️', '🧎‍♂️', '👩‍🦰', '👨‍🦰'
    ];


    const emojiDiv = document.createElement('div');
    emojiDiv.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emojiDiv.style.position = 'fixed';
    emojiDiv.style.fontSize = '24vh';
    emojiDiv.style.zIndex = '10000';


    const side = Math.floor(Math.random() * 4);
    switch (side) {
        case 0:
            emojiDiv.style.left = '50%';
            emojiDiv.style.top = '-10vh';
            emojiDiv.style.transform = 'translateX(-50%)';
            emojiDiv.animate([{ transform: 'translateY(100vh)' }], { duration: 4800, easing: 'linear' });
            break;
        case 1:
            emojiDiv.style.left = '-10vw';
            emojiDiv.style.top = '50%';
            emojiDiv.style.transform = 'translateY(-50%)';
            emojiDiv.animate([{ transform: 'translateX(100vw)' }], { duration: 4800, easing: 'linear' });
            break;
        case 2:
            emojiDiv.style.left = '100vw';
            emojiDiv.style.top = '50%';
            emojiDiv.style.transform = 'translateY(-50%)';
            emojiDiv.animate([{ transform: 'translateX(-100vw)' }], { duration: 4800, easing: 'linear' });
            break;
        case 3:
            emojiDiv.style.left = '50%';
            emojiDiv.style.top = '100vh';
            emojiDiv.style.transform = 'translateX(-50%)';
            emojiDiv.animate([{ transform: 'translateY(-100vh)' }], { duration: 4800, easing: 'linear' });
            break;
    }

    document.body.appendChild(emojiDiv);

    setTimeout(() => emojiDiv.remove(), 4800);
}

// document.body.addEventListener('click', addEmoji);