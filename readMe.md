<h4>--ID 11294254--</h4>
<h1>React Native App</h1>
    <p>This is a simple React Native application that demonstrates the use of <code>FlatList</code> and <code>SectionList</code> components to display lists of tasks and categories.</p>

    <h2>Components</h2>

    <h3>1. App</h3>
    <p><strong>Description</strong>: The main component that acts as the entry point of the application. It contains the layout and integrates other components.</p>
    <p><strong>Usage</strong>: Used to organize and structure the entire application. It includes the header, lists, and any other main features of the app.</p>

    <h3>2. Background</h3>
    <p><strong>Description</strong>: A custom component to provide a consistent background for the app.</p>
    <p><strong>Usage</strong>: Wraps the main content of the app to ensure a uniform background across different screens or components if there are.</p>

    <h3>3. CategoryCards</h3>
    <p><strong>Description</strong>: A component designed to display individual category cards.</p>
    <p><strong>Props</strong>:</p>
    <ul>
        <li><code>category</code>: The name of the category.</li>
        <li><code>image</code>: The image associated with the category.</li>
        <li><code>description</code>: A brief description of the category.</li>
    </ul>
    <p><strong>Usage</strong>: Ideal for displaying a visual representation of a category, mostly used within a list to show multiple categories.</p>

    <h3>4. TaskSections</h3>
    <p><strong>Description</strong>: A component used to display section headers for a list of tasks.</p>
    <p><strong>Props</strong>:</p>
    <ul>
        <li><code>task</code>: The title of the task section.</li>
    </ul>
    <p><strong>Usage</strong>: Useful for organizing tasks into sections with headers, enhancing readability and organization within lists.</p>

    <h2>Data Components</h2>

    <h3>1. FlatList</h3>
    <p><strong>Description</strong>: A core React Native component for efficiently rendering large lists of data.</p>
    <p><strong>Usage</strong>: Used to display scrollable lists of data where each item is rendered using a custom component.</p>

    <h3>2. SectionList</h3>
    <p><strong>Description</strong>: A core React Native component for rendering lists with section headers.</p>
    <p><strong>Usage</strong>: Ideal for displaying lists that need to be categorized into sections. Each section can have a header and individual items.</p>

    <h2>Styling</h2>

    <h3>Stylesheets</h3>
    <p><strong>Description</strong>: Styles in React Native are defined using JavaScript objects that mimic CSS styling.</p>
    <p><strong>Usage</strong>: Used to style components, including layout, typography, colors, and spacing. The <code>StyleSheet.create</code> method helps in defining and organizing these styles.</p>

    <h2>How to Run</h2>
    <ol>
        <li><strong>Install Dependencies</strong>:
            <pre><code>npm install</code></pre>
        </li>
        <li><strong>Start the App</strong>:
            <pre><code>expo start</code></pre>
        </li>
        <li><strong>Run on Emulator or Device</strong>:
            <ul>
                <li>Press <code>a</code> to open on an Android emulator.</li>
                <li>Press <code>i</code> to open on an iOS simulator.</li>
            </ul>
        </li>
    </ol>
