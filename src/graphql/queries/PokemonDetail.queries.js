import { gql } from "@apollo/client";

export const GET_POKEMON_BY_NAME = gql`
	query pokemon($name: String!) {
		pokemon(name: $name) {
			id
			name
			weight
			height
			sprites {
				front_default
			}
			abilities {
				ability {
					name
				}
				is_hidden
			}
			moves {
				move {
					name
				}
			}
			types {
				type {
					name
				}
			}
			message
			status
		}
	}
`;
