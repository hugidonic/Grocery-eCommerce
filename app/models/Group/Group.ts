import { Instance, SnapshotOut, types } from 'mobx-state-tree';

/**
 * Model description here for TypeScript hints.
 */
export const GroupModel = types
	.model('Group')
	.props({
		groupId: types.identifier,
		name: types.enumeration('Names', [
			'Dairy',
			'Oils',
			'Drinks',
			'Rice',
			'Sauces'
		]),
		color: types.string,
		picture: types.maybe(types.string)
	})
	.views((self) => ({}))
	.actions((self) => ({}));

export type GroupType = Instance<typeof GroupModel>;
// export interface Group extends GroupType {}

type GroupSnapshotType = SnapshotOut<typeof GroupModel>;
export interface GroupSnapshot extends GroupSnapshotType {}
export const createGroupDefaultModel = () => types.optional(GroupModel, {});
