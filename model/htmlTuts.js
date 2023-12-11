/** @format */

const htmlTuts = [
  {
    title: `HTML introduction`,
    tags: `HTML is the standard markup language for creating Web pages.`,
    description: `HTML is the standard markup language for creating Web pages ,<b>describes the structure of a Web page</b>,<b>tell the browser how to display the content</b>.`,
    content: [
      {
        subTitle: `a simple html document`,
        subDescription: `<b>&lt;!DOCTYPE html&gt;</b> declaration defines that this document is an HTML5 document.<b>&lt;html&gt;</b> element is the root element of an HTML page .<b>&lt;head&gt;</b> element contains <b>meta</b> information about the HTML page.<b>&lt;title&gt;</b> element specifies a title for the HTML page.<b> &lt;body&gt;</b> element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.<b>&lt;meta&gt;</b> tag defines metadata about an HTML document `,
        snippet: `

        <!DOCTYPE html>
        <html>
        <head>
        <meta charset="UTF-8">
        <meta name="description" content="Free Web tutorials">
        <meta name="keywords" content="HTML, CSS, JavaScript">
        <meta name="author" content="John Doe">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Page Title</title>
        </head>
        <body>

        <h1>My First Heading</h1>
        <p>My first paragraph.</p>

        </body>
        </html>


            `,
      },
    ],
  },
  {
    title: `HTML headings`,
    tags: `HTML headings are titles or subtitles that you want to display on a webpage.`,
    description: `HTML headings are defined with the &lt;h1&gt; to &lt;h6&gt; tags.Search engines use the headings to index the structure and content of your web pages.`,
    content: [
      {
        subTitle: `headings are important`,
        subDescription: `<b>&lt;h1&gt;</b> headings should be used for main headings, followed by <b>&lt;h2&gt;</b> headings, then the less important <b> &lt;h3&gt;</b>, and so on.`,
        snippet: `

    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
    `,
      },
    ],
  },
  {
    title: `HTML paragraphs`,
    tags: `A paragraph always starts on a new line, and is usually a block of text.`,
    description: `A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.`,
    content: [
      {
        subTitle: `tag reference`,
        subDescription: `<b>&lt;p&gt;</b> defines a paragraph.<b>&lt;hr&gt;</b> defines a thematic change in the content. <b>&lt;br&gt;</b> inserts a single line break.<b>&lt;pre&gt;</b> defines pre-formatted text.`,
        snippet: `
        <p>This is a <br> paragraph.</p>
        <hr>
        <p>This is another paragraph.</p>
        <pre>
        this is

        a  pre formatting text.
        </pre>
    `,
      },
    ],
  },
  {
    title: `HTML styles`,
    tags: `The HTML style attribute is used to add styles to an element, such as color, font, size, and more.`,
    description: `Setting the style of an HTML element, can be done with the style attribute.The HTML style attribute has the following syntax:`,
    content: [
      {
        subTitle: `style attribute`,
        subDescription: ``,
        snippet: `
        <tagname style="property:value;">

        <body style="background-color:powderblue;">

        <h1>This is a heading</h1>
        <p style="color:red;">This is a paragraph.</p>

        </body>
    `,
      },
    ],
  },
  {
    title: `HTML text formatting`,
    tags: `Formatting elements were designed to display special types of text.`,
    description: ``,
    content: [
      {
        subTitle: `formatting elements`,
        subDescription: ``,
        snippet: `

        <b> - Bold text
        <strong> - Important text
        <i> - Italic text
        <em> - Emphasized text
        <mark> - Marked text
        <small> - Smaller text
        <del> - Deleted text
        <ins> - Inserted text
        <sub> - Subscript text
        <sup> - Superscript text
    `,
      },
    ],
  },
  {
    title: `HTML quotatio and citation elements`,
    tags: `&lt;blockquote&gt;,&lt;q&gt;, &lt;abbr&gt;, &lt;address&gt;, &lt;cite&gt;, and &lt;bdo&gt;`,
    description: ``,
    content: [
      {
        subTitle: ``,
        subDescription: ``,
        snippet: `

        <blockquote cite="http://www.worldwildlife.org/who/index.html">
        For 60 years, WWF has worked to help people and nature thrive. As the world's leading conservation organization, WWF works in nearly 100 countries. At every level, we collaborate with people around the world to develop and deliver innovative solutions that protect communities, wildlife, and the places in which they live.
        </blockquote>
        <q>short quotations.</q>
        <abbr title=""World Health Organization>WHO</abbr>
        <address>
        Written by John Doe.<br>
        Visit us at:<br>
        Example.com<br>
        Box 564, Disneyland<br>
        USA
        </address>
    `,
      },
    ],
  },
  {
    title: `HTML comments`,
    tags: `HTML comments are not displayed in the browser, but they can help document your HTML source code.`,
    description: `You can add comments to your HTML source by using the following syntax:`,
    content: [
      {
        subTitle: ``,
        subDescription: ``,
        snippet: `
        <p>below is a comment not displayed on the borwser</p>
        <!-- Write your comments here -->

    `,
      },
    ],
  },
  {
    title: `HTML styles -css`,
    tags: `CSS stands for Cascading Style Sheets.`,
    description: `CSS saves a lot of work. It can control the layout of multiple web pages all at once`,
    content: [
      {
        subTitle: `inline css`,
        subDescription: `An inline CSS is used to apply a unique style to a single HTML element.An inline CSS uses the style attribute of an HTML element.`,
        snippet: `
        <h1 style="color:blue;">A Blue Heading</h1>

        <p style="color:red;">A red paragraph.</p>
    `,
      },
      {
        subTitle: `internal css`,
        subDescription: `An internal CSS is used to define a style for a single HTML page.`,
        snippet: `
      <!DOCTYPE html>
      <html>
      <head>
      <style>
      body {background-color: powderblue;}
      h1   {color: blue;}
      p    {color: red;}
      </style>
      </head>
      <body>

      <h1>This is a heading</h1>
      <p>This is a paragraph.</p>

      </body>
      </html>
    `,
      },
      {
        subTitle: `extenal css`,
        subDescription: `An external style sheet is used to define the style for many HTML pages.`,
        snippet: `
    <!DOCTYPE html>
    <html>
    <head>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>

    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>

    </body>
    </html>
    `,
      },
    ],
  },
  {
    title: `HTML links`,
    tags: `<b>&lt;a&gt;</b> anchor link`,
    description: `Links are found in nearly all web pages. Links allow users to click their way from page to page.`,
    content: [
      {
        subTitle: `syntax`,
        subDescription: `The <b>target</b> attribute specifies where to open the linked document.`,
        snippet: `
        <a href="url" target="_blank|_self|_parent|_top">link text</a>
    `,
      },
    ],
  },
  {
    title: `HTML image`,
    tags: `<b>&lt;img&gt;</b>`,
    description: `Images can improve the design and the appearance of a web page.`,
    content: [
      {
        subTitle: `syntax`,
        subDescription: `<b>src </b>- Specifies the path to the image .`,
        snippet: `

        <img src="url" alt="alternatetext">

    `,
      },
    ],
  },
  {
    title: `HTML page title`,
    tags: `<b>&lt;title&gt;</b> `,
    description: ``,
    content: [
      {
        subTitle: ``,
        subDescription: ``,
        snippet: `
        <!DOCTYPE html>
        <html>
        <head>
          <title>HTML Tutorial</title>
        </head>
        <body>

        The content of the document......

        </body>
        </html>
    `,
      },
    ],
  },
  {
    title: `HTML tables`,
    tags: `HTML tables allow web developers to arrange data into rows and columns.`,
    description: ``,
    content: [
      {
        subTitle: `syntax`,
        subDescription: `Each table cell is defined by a <b> &lt;td&gt; </b> and a <b>&lt;/td&gt; </b> tag.Each table row starts with a <b> &lt;tr&gt; </b> and ends with a <b> &lt;/tr&gt;</b> tag.Sometimes you want your cells to be table header cells. In those cases use the <b>&lt;th&gt;</b> tag instead of the &lt;td&gt; tag`,
        snippet: `
        <table>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
       </table>
    `,
      },
    ],
  },
  {
    title: `HTML lists`,
    tags: `HTML lists allow web developers to group a set of related items in lists.`,
    description: ``,
    content: [
      {
        subTitle: `unordered list`,
        subDescription: `An unordered list starts with the  &lt;ul&gt; tag. Each list item starts with the &lt;li&gt; tag.`,
        snippet: `
        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
    `,
      },
      {
        subTitle: `ordered list`,
        subDescription: `An ordered list starts with the &lt;ol&gt; tag. Each list item starts with the &lt;li&gt; tag.`,
        snippet: `
      <ol>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ol>
    `,
      },
      {
        subTitle: `description list`,
        subDescription: `A description list is a list of terms, with a description of each term.`,
        snippet: `
      <dl>
        <dt>Coffee</dt>
        <dd>- black hot drink</dd>
        <dt>Milk</dt>
        <dd>- white cold drink</dd>
      </dl>
    `,
      },
    ],
  },
  {
    title: `HTML block and inline`,
    tags: `Block-level element & Inline element`,
    description: `Every HTML element has a default display value, depending on what type of element it is.The two most common display values are block and inline.`,
    content: [
      {
        subTitle: `block level element`,
        subDescription: `A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element.A block-level element always takes up the full width available.Example:
        <b> &lt;address&gt; ,&lt;article&gt;,&lt;aside&gt;,&lt;blockquote&gt;,&lt;canvas&gt; ,&lt;dd&gt;,&lt;div&gt;,&lt;dl&gt;,&lt;dt&gt;,&lt;li&gt;,&lt;div&gt;...etc.</b>

        `,
        snippet: ``,
      },
      {
        subTitle: `inline element`,
        subDescription: `An inline element does not start on a new line.Example:
        <b> &lt;a&gt; ,&lt;abbr&gt;,&lt;button&gt;,&lt;code&gt;,&lt;select&gt; ,&lt;script&gt;,&lt;label&gt;,&lt;textarea&gt;,&lt;time&gt;,&lt;small&gt;...etc.</b>

        `,
        snippet: ``,
      },
    ],
  },

  {
    title: `HTML class attribute`,
    tags: `The HTML class attribute is used to specify a class for an HTML element.`,
    description: `Multiple HTML elements can share the same class.`,
    content: [
      {
        subTitle: ``,
        subDescription: ``,
        snippet: `
        <!DOCTYPE html>
        <html>
        <head>
        <style>
        .city {
          background-color: tomato;
          color: white;
          border: 2px solid black;
          margin: 20px;
          padding: 20px;
        }
        </style>
        </head>
        <body>

        <div class="city">
          <h2>London</h2>
          <p>London is the capital of England.</p>
        </div>

        <div class="city">
          <h2>Paris</h2>
          <p>Paris is the capital of France.</p>
        </div>

        <div class="city">
          <h2>Tokyo</h2>
          <p>Tokyo is the capital of Japan.</p>
        </div>

        </body>
        </html>
    `,
      },
    ],
  },
  {
    title: `HTML id Attribute`,
    tags: `The HTML id attribute is used to specify a unique id for an HTML element.`,
    description: `You cannot have more than one element with the same id in an HTML document.`,
    content: [
      {
        subTitle: ``,
        subDescription: ``,
        snippet: `

        <!DOCTYPE html>
        <html>
        <head>
        <style>
        #myHeader {
          background-color: lightblue;
          color: black;
          padding: 40px;
          text-align: center;
        }
        </style>
        </head>
        <body>

        <h1 id="myHeader">My Header</h1>

        </body>
        </html>
      `,
      },
    ],
  },
  {
    title: `HTML Iframes`,
    tags: `An HTML iframe is used to display a web page within a web page.`,
    description: `The HTML <iframe> tag specifies an inline frame.`,
    content: [
      {
        subTitle: `syntax`,
        subDescription: ``,
        snippet: `
        <iframe src="url" title="description"></iframe>
      `,
      },
    ],
  },
  {
    title: `HTML5 tags`,
    tags: `HTML5 is the latest and most enhanced version of HTML. `,
    description: `<b>&lt;audio&gt;,&lt;video&gt;,&lt;article&gt;,&lt;details&gt;,&lt;header&gt;,&lt;aside&gt;,&lt;footer&gt;,&lt;List tag&gt;,&lt;a&gt;</b> ...etc.

    `,
    content: [
      {
        subTitle: `Reference List Tags.`,
        subDescription: ` <a href="https://www.tutorialspoint.com/html5/html5_tags.htm" target="_blank">Refernce of HTML5 Tags.</a>`,
        snippet: ``,
      },
    ],
  },
];

export default htmlTuts;
