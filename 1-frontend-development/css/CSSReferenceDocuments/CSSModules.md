# CSS Modules in React
[How to Style React Components Using CSS Modules](https://www.makeuseof.com/react-components-css-modules-style/)

[Vite CSS Module Documentation](https://vite.dev/guide/features#css-modules)

Any CSS file ending with .module.css is considered a CSS modules file. Importing such a file will return the corresponding module object.

For example, create Button.js as follows;

    export default function Button() {
            return (
                <button>Submit</button>
            )
        }


Next, create a new file called Button.module.css and add the following

    .btn {
        width: 90px;
        height: 40px;
        padding: 10px 20px;
        border-radius: 4px;
        border: none;
    }

To use this class in the Button component, import it as styles and reference it in the class name of the button element like this:

    import styles from "./Button.module.css"
    
    export default function Button() {
        return (
            <button className={styles.btn}>Submit</button>
        )
}

In CSS Modules, each class should be scoped to prevent it from applying globally. However, if you write general selectors like ul, li, or a without any class selectors, they’ll behave as global styles. To scope these styles to a particular component, you'll need to wrap them in a CSS class specific to the component. Example for a simple Navigation bar:

    .menuContainer {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
    }

    .menuContainer li {
    float: left;
    }

    .menuContainer li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    }

    .menuContainer li a:hover:not(.active) {
    background-color: #2cbe08;
    }

    .active {
    background-color: #04AA6D;
    }
 
