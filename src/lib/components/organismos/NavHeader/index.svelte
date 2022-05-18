<script context="module">
	export const router = false;
</script>
<script> 
  /**
   * Autor: Jesus Lozano <0line>
   * Verson: 1 30/04/2021
   * Este componente renderiza la navegación. 
   */

  //Lista de navegación
  const menuitems = [
    { label: "Pedidos", href: "/", 
      submenu:[] 
    },
    { label: "Ingredientes", href: "/ingredients", 
      submenu:[] 
    },
    { label: "Meals", href: "/meals", 
    submenu:[]
    },
    { label: "Historico de Compras", href: "/ingredients-history",
      submenu:[]
    },
    { label: "Historico de pedidos", href: "/orders" }
  ];
  
  let y;
</script>
<svelte:window bind:scrollY={y} />
<header class="drpm-navheader {y>80 ? 'drpm_scroll' : 'drpm_scroll_mobil'}">
  <nav class="drpm_container_navheader py-1.5">
    <input type="checkbox" name="" id="check">            
    <figure class="flex flex-1 items-center">
      <a href="/">
        <img src="#" alt="" class="h-10 w-auto leading-10 drpm_logo">
      </a>
    </figure>
    <div class="drpm_menu_container">
      <div class="drpm_menu_items lg:mr-3">
        <ul>
          <!--Menú Inicio-->
          {#each menuitems as menuitem, i}
            {#if menuitem.submenu}   
              <!--Submenu Inicio-->
              <li class="drpm_menu_item hover:text-white font-bold" style="--i: .{i + 1}s">
                <a href="{menuitem.href}">{menuitem.label}</a>
                <div class="drpm_submenu">
                  <ul>
                    {#each menuitem.submenu as submenu_items}
                      {#if submenu_items.submenu}
                        <li class="drpm_submenu_item h-full">
                          <a sveltekit:prefetch href="{submenu_items.href}">{submenu_items.label}</a>
                          <div class="drpm_submenu drpm_level2">
                            <ul>
                              {#each submenu_items.submenu as submenu_nivel2}
                                <li class="drpm_submenu_item">
                                  <a sveltekit:prefetch href="{submenu_nivel2.href}">{submenu_nivel2.label}</a>
                                </li> 
                              {/each}
                              <!-- <div class="arrow"></div> -->
                            </ul>
                          </div>
                        </li>
                      {:else if submenu_items.label}
                        <li class="drpm_submenu_item">
                          <a sveltekit:prefetch href="{submenu_items.href}">{submenu_items.label}</a>
                        </li> 
                      {/if}<!-- 
                      <div class="arrow"></div> -->
                    {/each}
                  </ul>
                </div>
              </li> 
              <!--Submenu Fin-->
              
            {:else if menuitem.label}
              <li class="drpm_menu_item hover:text-white font-bold" style="--i: .{i + 1}s"><a href="{menuitem.href}">{menuitem.label}</a></li>
            {/if}
          {/each}
          <!--Menú Fin-->
        </ul>
      </div>
    </div>
    <div class="hamburger-menu-container">
      <div class="hamburger-menu">
          <div></div>
      </div>
    </div>
  </nav>
</header>

<style lang="scss">
  .drpm-navheader{
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 1000;
  }

  .drpm{
    &_container_navheader{
      max-width: 100%;
      padding: 0.5rem 2rem;
      margin: 0 auto;
      display: flex;
      position: relative;
    }
    &_menu{
      &_container{
        flex: 3;
        display: flex;
        align-items: center;
      }
      &_items{
        flex: 2;
        & > ul{
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
      }
      &_item{
        position: relative;
        margin-left: 1em;
        margin-right: 1em;
        & > a{
          line-height: 3rem;
          padding:0 1rem;
          letter-spacing: 1px;
          font-size: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: .5s;
          color:rgb(230, 231, 231);
          &:hover{
            transform: scale(1.1);
          }
          & > i{
            margin-left: .2rem;
          }
        } 
      }
    }
    &_submenu{
      position: absolute;
      top: 100%;
      left: 0;
      width: 10rem;
      transform: translateY(10px);
      opacity: 0;
      pointer-events: none;
      transition: .5s;
      & ul{
        position: relative;
      }
      &_item{
        position: relative;
        & i{
            transform: rotate(-90deg);
        }
        & > a{
          display: flex;
          background-color: #fff;
          @apply text-neutral-300;
          padding: .5rem 1rem;
          font-size: .9rem;
          align-items: center;
          justify-content: space-between;
          transition: .3s;
        }
        &:hover > a{
          @apply bg-green-600;
          color: #fff;
        }
        &::not(:nth-last-child(2)){
          border-bottom: 1px solid #efefef;
        }
        &:first-child:hover ~ .arrow{
            @apply bg-green-600;
        }
      }
      &.drpm_level2{
        top: 0;
        left: 100%;
        cursor: pointer;
        transform: translateX(10px);
        & .arrow{
            top: 10px;
            left: -5.5px;
        }
      }
    }
  }

  .arrow{
    position: absolute;
    width: 11px;
    height: 11px;
    top: -5.5px;
    left: 32px;
    background-color: #fff;
    transform: rotate(45deg);
    cursor: pointer;
    transition: .3s;
    z-index: -1;
  }

  .drpm_menu_item:hover>.drpm_submenu,
  .drpm_submenu_item:hover > .drpm_submenu{
    transform: translate(0, 0);
    opacity: 1;
    pointer-events: auto;
  }

  .drpm{
    &_container_buttons{
      display:flex;
      justify-content: center;
      align-items: center;
    }
  }


  .hamburger-menu-container {
    flex: 1;
    display: none;
    align-items: center;
    justify-content: flex-end;
  }

  .hamburger-menu {
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    div {
      width: 1.6rem;
      height: 3px;
      border-radius: 3px;
      @apply  bg-green-600;
      position: relative;
      z-index: 1001;
      transition: .5s;
      &:before {
        content: '';
        position: absolute;
        width: inherit;
        height: inherit;
        @apply  bg-green-600;
        border-radius: 3px;
        transition: .5s;
        transform: translateY(-7px);
      }
      &:after {
        content: '';
        position: absolute;
        width: inherit;
        height: inherit;
        @apply  bg-green-600;
        border-radius: 3px;
        transition: .5s;
        transform: translateY(7px);
      }
    }
  }
  #check{
      position: absolute;
      top: 50%;
      right: 1.5rem;
      transform: translateY(-50%);
      width: 2.5rem;
      height: 2.5rem;
      z-index: 90000;
      cursor: pointer;
      opacity: 0;
      display: none;
  }

  #check:checked ~ .hamburger-menu-container .hamburger-menu div{
      background-color: transparent;
  }

  #check:checked ~ .hamburger-menu-container .hamburger-menu div:before{
      transform: translateY(0) rotate(-45deg);
  }

  #check:checked ~ .hamburger-menu-container .hamburger-menu div:after{
      transform: translateY(0) rotate(45deg);
  }

  .drpm-btn-navbar{
    text-align: center;
    justify-content: center !important;
    align-content: center;
    align-items: center !important;
    line-height: 2.5rem !important;
    font-size: 1em !important;
    padding: 0 1em 0 !important;
  }

  .btn-obtener-demo{
    font-size: 1em;
    padding: 12px 20px;
  }

  .drpm_logo{
    filter: invert(0) saturate(0) brightness(100);
  }
  .drpm_scroll{
    animation-timing-function: ease;
    animation-duration: 0.2s;
    transition: .5s;
    background-color: white;
    & .drpm_menu_item a{
      color:#75777B;
    }
    & .drpm_submenu_item a:hover{
      color:white;
    }
    & .drpm_logo{
      filter:none;
      margin-left: 20px;
      transform: scale(1.2);
    }
  }

@keyframes animation{
    from{
        opacity: 0;
        transform: translateY(15px);
    }
    to{
        opacity: 1;
        transform: translateY(0px);
    }
}


@media (max-width: 920px) {
  .drpm_scroll_mobil{
    background-color: white;
    & .drpm_menu_item a{
      color:#75777B;
    }
    & .drpm_logo{
      filter:none;
      margin-left: 20px;
      transform: scale(1.2);
    }
  }
  .drpm-btn-navbar{
    width: 100%;
    padding: 0.4em !important;
  }
	.hamburger-menu-container {
		display: flex;
	}
	#check {
		display: block;
		&:checked {
			~ {
				.drpm_menu_container {
					transform: translateX(0);
					.drpm_menu_item {
						animation: animation .5s ease forwards var(--i);
					}
				}
			}
		}
	}
	.drpm_menu_container {
		position: fixed;
		height: calc(100vh - 3rem);
		top: 3.5rem;
		left: 0;
		width: 100%;
		background-color: #fff;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		overflow-x: hidden;
		overflow-y: auto;
		transform: translateX(100%);
		transition: .65s;
	}
	.drpm_menu_items {
		flex: initial;
		width: 100%;
    justify-content: space-between;
		>ul {
			flex-direction: column;
		}
	}
	.drpm_menu_item {
		width: 100%;
		opacity: 0;
		transform: translateY(15px);
		>a {
			line-height: 1;
			padding: 1.6rem 2rem;
      color: #000;
			>i {
				font-size: 1.1rem;
				transform: rotate(-90deg);
				transition: .7s;
			}
		}
		&:hover {
			>a {
				transform: scale(1);
				background-color: #f2f2f2;
        color:#008833;
				>i {
					transform: rotate(360deg);
				}
			}
			>.drpm_submenu {
				display: block;
			}
			.arrow {
				background-color: #50a9d6;
			}
		}
	}
	.drpm_submenu {
		position: initial;
		top: initial;
		left: initial;
		transform: initial;
		opacity: 1;
		pointer-events: auto;
		width: 100%;
		padding: 0;
		background-color: #fff;
		display: none;
		.drpm_submenu {
			.arrow {
				display: none;
			}
		}
		i {
			font-size: 1rem;
			transition: .7s;
		}
	}
	.drpm_submenu.drpm_level2 {
		position: initial;
		top: initial;
		left: initial;
		transform: initial;
		opacity: 1;
		pointer-events: auto;
		width: 100%;
		padding: 0;
		background-color: #fff;
		display: none;
		.drpm_submenu_item {
			>a {
				padding: 1.2rem 2rem 1.2rem 3.5rem;
			}
      &:hover{
        >a{
          color: #008833 !important;
          background-color: #DFDFDF;
        }
      }
		}
	}
	.drpm_submenu_item {
		&:hover {
			>.drpm_submenu {
				display: block;
			}
			>a {
				background-color: #E5E7EB;
        color: #008833;
				>svg {
					transform: rotate(360deg);
				}
			}
		}
		>a {
			background-color: transparent;
			color: #008833;
			padding: 1.2rem 2.5rem;
			line-height: 1;
		}
		&:not(:nth-last-child(2)) {
			border-bottom: none;
		}
		&:first-child {
			&:hover {
				~ {
					.arrow {
						background-color: #50a9d6;
					}
				}
			}
		}
	}

  .drpm{
    &_container_buttons{
      display:block;
      justify-content: center;
      align-items: flex-start;
      flex:1;
      width: 100%;
      padding: 2rem;
    }
  }

	.arrow {
		z-index: 1;
		background-color: #69bde7;
		left: 10%;
		transform: scale(1.1) rotate(45deg);
		transition: .5s;
	}
}
</style>