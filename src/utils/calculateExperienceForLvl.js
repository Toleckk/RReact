export const calculateExperienceForLvl = lvl => {
    let result = 500;
    for (let i = 1; i < lvl; ++i)
        result += Math.round(0.2 * result);
    return result;
};