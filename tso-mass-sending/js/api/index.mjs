import explorerSearchInfo from "../data/explorer-search-info.mjs";
import explorerTypes from "../data/explorer-types.mjs";
import { explorers, groups } from "../data/db/index.mjs";

import { convertGroupsToEnrichedGroups } from '../utils/groups.mjs';

export const loadAllData = () => {
    const explorerTypeIdMap = {};
    explorerTypes.forEach(exp => { explorerTypeIdMap[exp.id] = exp; });
    const enrichedExplorers = explorers.map(explorer => ({ ...explorer, type: explorerTypeIdMap[explorer.typeId] }));
    const explorersIdMap = explorers.reduce((obj, explorer) => {
        obj[explorer.id] = explorer;
        return obj;
    }, {})

    const explorerSearchInfoIdMap = [
        ...explorerSearchInfo.treasureSearches,
        ...explorerSearchInfo.adventureSearches,
        ...explorerSearchInfo.specialSearches
    ].reduce((obj, searchInfo) => {
        obj[searchInfo.id] = searchInfo;
        return obj;
    }, {});

    return {
        explorers: enrichedExplorers,
        explorersIdMap,
        explorerTypes,
        explorerTypeIdMap,
        explorerSearchInfo,
        explorerSearchInfoIdMap,
        groups: convertGroupsToEnrichedGroups(groups, explorers, explorerSearchInfoIdMap, explorerTypes),
    };
};

export const loadGroupData = (groupId) => {
    const data = loadAllData();
    const filteredGroups = groups.filter(gr => gr.id === groupId);
    const enrichedGroups = convertGroupsToEnrichedGroups(groups, explorers, data.explorerSearchInfoIdMap, explorerTypes);
    return {
        ...data,
        group: data.groups.find(gr => gr.id === groupId)
    };
};

export const updateGroupTasks = (groupId, explorersId, taskId) => {
    const group = groups.find(gr => gr.id === groupId);
    if (!group) { throw new Error(`Cannot update the group, group with id [${groupId}] not found!`); }

    if (taskId === 'none') {
        explorersId.forEach(explorerId => {
            delete group.members[explorerId];
        });
        return;
    }

    const taskOptions = [
        ...explorerSearchInfo.treasureSearches,
        ...explorerSearchInfo.adventureSearches,
        ...explorerSearchInfo.specialSearches
    ];
    const task = taskOptions.find(task => task.id === taskId);
    if (!task) { throw new Error(`Cannot update the group, task with id [${taskId}] not found!`); }
    
    const explorersMap = explorers.reduce((obj, explorer) => {
        obj[explorer.id] = explorer;
        return obj;
    }, {})
    explorersId.forEach(explorerId => {
        const explorer = explorersMap[explorerId];
        if (explorer.startedAt && explorer.currentTask) {
            return;
        }
        group.members[explorerId] = taskId;
    });
}

export const sendGroup = (groupId) => {
    const group = groups.find(gr => gr.id === groupId);
    const membersMap = group.members;
    let counter = 0;
    explorers
        .forEach(explorer => {
            const taskId = membersMap[explorer.id];
            if (!taskId) { return; }
            if (explorer.startedAt && explorer.currentTask) { return; }
            counter++;
            explorer.currentTask = taskId;
            explorer.startedAt = Date.now();
        });
    return counter;
};