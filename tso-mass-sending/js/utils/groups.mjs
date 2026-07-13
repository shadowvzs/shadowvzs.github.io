export const getGroupDetails = (group, explorerSearchIdMap, explorerIdMap) => {
    const typeCounter = Object.keys(group.members)
        .reduce((obj, explorerId) => {
            const explorer = explorerIdMap[explorerId];
            const typeId = explorer.typeId;
            if (!obj[typeId]) { obj[typeId] = 0; }
            obj[typeId]++;
            return obj;
        }, {});

    const searchTypeCounter = Object.values(group.members)
        .reduce((obj, searchTypeId) => {
            if (!obj[searchTypeId]) { obj[searchTypeId] = 0; }
            obj[searchTypeId]++;
            return obj;
        }, {});

    const taskData = Object.entries(searchTypeCounter).reduce((obj, [typeId, count]) => {
        const { category, level, iconUrl, iconButtonUrl, name } = explorerSearchIdMap[typeId];
        obj[category].push({
            level,
            iconUrl,
            iconButtonUrl,
            typeId,
            count,
            name
        });
        return obj;
    }, { adventure: [], treasure: [] });

    taskData.adventure.sort((a, b) => a.level - b.level);
    taskData.treasure.sort((a, b) => a.level - b.level);

    return { typeCounter, taskData };
}

export const convertGroupsToEnrichedGroups = (groups, explorers, explorerSearchInfoIdMap) => {
    const explorerIdMap = {};
    const members = [];
    
    explorers.forEach(exp => { explorerIdMap[exp.id] = exp; });

    const enrichedGroups = groups.map(group => ({
        ...group,
        ...getGroupDetails(group, explorerSearchInfoIdMap, explorerIdMap),
        memberList: Object.entries(group.members)
            .map(([explorerId, taskId]) => ({
                ...explorerIdMap[explorerId],
                task: explorerSearchInfoIdMap[taskId],      
            }))
    }));

    return enrichedGroups;
};

