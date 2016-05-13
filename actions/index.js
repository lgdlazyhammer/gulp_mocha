module.exports.addTree = function(id, treeType, attributes, links, relationships){
	return {
    type: 'ADD_TREE',
    id,
    treeType,
    attributes,
    links,
    relationships
  }
}

module.exports.addCurrentTree = function(accountId, projectId, treeId){
	return {
    type: 'ADD_CURRENT_TREE',
    accountId,
    projectId,
    treeId
  }
}
