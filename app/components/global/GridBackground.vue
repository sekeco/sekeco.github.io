<template>
    <div
        style="
            background-image: linear-gradient(to right, var(--ui-bg-accented) 1px, transparent 1px), linear-gradient(to bottom, var(--ui-bg-accented) 1px, transparent 1px); background-size: 20px 20px;
            background-position: 0 0, 0 0;
            mask-image: repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, transparent 90%);
            -webkit-mask-image: repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, transparent 90%);
            mask-composite: intersect;
            -webkit-mask-composite: source-in;
        "
    />
</template>
