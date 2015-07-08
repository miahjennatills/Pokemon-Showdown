exports.BattleScripts = {
	      init: function() {
		            for (var i in this.data.Pokedex) {
			                    var nature = '';
			                    var adjustment = 0;
		          	            if (this.data.Scripts[i]) tier = this.data.Scripts[i].tier;
			                    switch (nature) {
			                    case 'Serious':
			                    case 'Docile':
			                    case 'Hardy':
			                    case 'Quirky':
				                        adjustment = 0;
				                        break;
			                    case 'Lonely':
			                    case 'Brave':
			                    case 'Adamant':
			                    case 'Naughty':
				                        adjustment = 50;
			                    }

			                     if (adjustment) {
                            				this.data.Pokedex[i].baseStats.atk += adjustment;
                          		    }
					    switch (nature) {
		                      	    case 'Bold':
			                    case 'Relaxed':
			                    case 'Impish':
			                    case 'Lax':
				                        adjustment = 50;
		                      	    }
		           
		                       	    if (adjustment) {
                            				this.data.Pokedex[i].baseStats.def += adjustment;
                          		    }
		                      	    switch (nature) {
		                      	    case 'Modest':
			                    case 'Mild':
			                    case 'Quiet':
			                    case 'Rash':
				                        adjustment = 50;
		                            }
		           
		                            if (adjustment) {
                            				this.data.Pokedex[i].baseStats.spa += adjustment;
			                    }
			                    switch (nature) {
		                            case 'Calm':
			                    case 'Gentle':
			                    case 'Sassy':
			                    case 'Careful':
				                        adjustment = 50;
		                            }
		           
		                            if (adjustment) {
                            				this.data.Pokedex[i].baseStats.spd += adjustment;
			                    }
			                    switch (nature) {
                                            case 'Timid':
			                    case 'Hasty':
			                    case 'Jolly':
			                    case 'Naive':
				                        adjustment = 50;
		                            }
		           
		                            if (adjustment) {
                            				this.data.Pokedex[i].baseStats.spe += adjustment;
			                    }
			                    switch (nature) {
                                            case 'Bold':
			                    case 'Timid':
			                    case 'Modest':
			                    case 'Calm':
				                        adjustment = 80;
			                    }

			                    if (adjustment) {
                            				this.data.Pokedex[i].baseStats.atk -= adjustment;
                                            }
                                            switch (nature) {
		                            case 'Lonely':
			                    case 'Hasty':
			                    case 'Mild':
			                    case 'Gentle':
				                        adjustment = 80;
		                            }
		           
		                            if (adjustment) {
                            				this.data.Pokedex[i].baseStats.def -= adjustment;
                                            }
                                            switch (nature) {
		                            case 'Adamant':
			                    case 'Impish':
			                    case 'Jolly':
			                    case 'Careful':
				                        adjustment = 80;
		                            }
		           
		                            if (adjustment) {
                            				this.data.Pokedex[i].baseStats.spa -= adjustment;
			                    }
			                    switch (nature) {
		                            case 'Naughty':
			                    case 'Lax':
			                    case 'Naive':
			                    case 'Rash':
				                        adjustment = 80;
		                            }
		           
		                            if (adjustment) {
                            				this.data.Pokedex[i].baseStats.spd -= adjustment;
			                    }
			                    switch (nature) {
                                            case 'Brave':
			                    case 'Relaxed':
			                    case 'Quiet':
			                    case 'Sassy':
				                        adjustment = 80;
		                            }
		           
		                            if (adjustment) {
                            				this.data.Pokedex[i].baseStats.spe -= adjustment;
			                    }
                }
	     }
};
