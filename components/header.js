const headerTemplate = document.createElement("template");
headerTemplate.innerHTML = `
<style>
    .all-nav {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        background-color: var(--clr-light);
    }

    .logo {
        color: var(--clr-dark);
        text-transform: uppercase;
        letter-spacing: 5px;
        font-size: 20px;
        margin-left: 15px;
    }

    .nav-links {
        display: flex;
        list-style: none;
        justify-content: space-around;
        width: 35%;
    }

    .nav-links a {
        color: black;
        text-decoration: none;
        letter-spacing: 3px;
        font-weight: bold;
    }

    .burger {
        display: none;
        margin-right: 15px;
    }

    .burger div {
        width: 25px;
        height: 3px;
        background-color: black;
        margin: 5px;
        transition: all 0.3s ease;
    }

    @media screen and (max-width: 1024px) {
        .nav-links {
            width: 60%;
        }
    }

    @media screen and (max-width: 768px) {
        .body {
            overflow-x: hidden;
        }
        .nav-links {
            position: absolute;
            right: 0px;
            bottom: 0px;
            height: 100vh;
            top: 25px;
            background-color: var(--clr-light);
            z-index: 3;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 50%;
            transform: translateX(100%);
            transition: transform 0.5s ease-in;
        }

        .nav-links li {
            opacity: 0;
        }

        .nav-links li:hover {
            text-decoration: underline;
            transform: scale(1.2);
        }

        .burger {
            display: block;
            cursor: pointer;
        }
    }
</style>

<div class="all-nav">
    <nav>
        <div class="logo">
            <h4>Minkyu Song</h4>
        </div>
        <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">My Projects</a></li>
            <li><a href="#">Photos</a></li>
        </ul>
        <div class="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
    </nav>
</div>
`;

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
            .all-nav {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
        
            nav {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 40px;
                background-color: var(--clr-light);
            }
        
            .logo {
                color: var(--clr-dark);
                text-transform: uppercase;
                letter-spacing: 5px;
                font-size: 20px;
                margin-left: 15px;
            }
        
            .nav-links {
                display: flex;
                list-style: none;
                justify-content: space-around;
                width: 35%;
            }
        
            .nav-links a {
                color: black;
                text-decoration: none;
                letter-spacing: 3px;
                font-weight: bold;
            }
        
            .burger {
                display: none;
                margin-right: 15px;
            }
        
            .burger div {
                width: 25px;
                height: 3px;
                background-color: black;
                margin: 5px;
                transition: all 0.3s ease;
            }
        
            @media screen and (max-width: 1024px) {
                .nav-links {
                    width: 60%;
                }
            }
        
            @media screen and (max-width: 768px) {
                .body {
                    overflow-x: hidden;
                }
                .nav-links {
                    position: absolute;
                    right: 0px;
                    bottom: 0px;
                    height: 100vh;
                    top: 25px;
                    background-color: var(--clr-light);
                    z-index: 3;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 50%;
                    transform: translateX(100%);
                    transition: transform 0.5s ease-in;
                }
        
                .nav-links li {
                    opacity: 0;
                }
        
                .nav-links li:hover {
                    text-decoration: underline;
                    transform: scale(1.2);
                }
        
                .burger {
                    display: block;
                    cursor: pointer;
                }
            }
        </style>
        
        <div class="all-nav">
            <nav>
                <div class="logo">
                    <h4>Minkyu Song</h4>
                </div>
                <ul class="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">My Projects</a></li>
                    <li><a href="#">Photos</a></li>
                </ul>
                <div class="burger">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>
            </nav>
        </div>
        `;
    }
}

customElements.define("header-component", Header);
