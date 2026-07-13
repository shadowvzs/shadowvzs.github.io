import explorerSearchInfo from "../data/explorer-search-info.mjs";
import explorerTypes from "../data/explorer-types.mjs";
import { explorers, groups } from "../data/db/index.mjs";

import { convertGroupsToEnrichedGroups } from '../utils/groups.mjs';

export const loadAllData = () => {
    const explorerTypeIdMap = {};
    explorerTypes.forEach(exp => { explorerTypeIdMap[exp.id] = exp; });
    const enrichedExplorers = explorers.map(explorer => ({ ...explorer, type: explorerTypeIdMap[explorer.typeId] }));

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