var expect = require('expect');
var actions = require('../../actions');

describe('trees actions', () => {
    it('addTree should create ADD_TREE action', () => {
        expect(actions.addTree("id", "treeType", {}, {}, {})).toEqual({
            type: 'ADD_TREE',
            id: "id",
            treeType: "treeType",
            attributes: {},
            links: {},
            relationships: {}
        })
    })

    it('addCurrentTree should create ADD_CURRENT_TREE action', () => {
        expect(actions.addCurrentTree("accountId", "projectId", "treeId")).toEqual({
          type: 'ADD_CURRENT_TREE',
          accountId: "accountId",
          projectId: "projectId",
          treeId: "treeId"
        })
    })
})
