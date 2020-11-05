import { Component } from '@angular/core';

import { Book } from '../../core/models/book.model';

@Component({
  selector: 'sci-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  books: Book[] = [
    {
      title: 'Atlas of Science: Visualizing What We Know',
      author: 'Katy Börner',
      publisher: 'MIT Press',
      abstract: 'Atlas of Science, based on the popular exhibit Places & Spaces: Mapping Science, describes and displays successful mapping techniques. The heart of the book is a visual feast: Claudius Ptolemy\'s Cosmographia World Map from 1482; a guide to a PhD thesis that resembles a subway map; "the structure of science" as revealed in a map of citation relationships in papers published in 2002; a periodic table; and many more. Each entry includes the story behind the map and biographies of its makers.',
      pdfLink: 'http://www.barnesandnoble.com/w/atlas-of-science-katy-borner/1100660429?cm_mmc=googlepla-_-textbook_instock_26to75_pt105-_-q000000633-_-9780262014458&ean=9780262014458&isbn=9780262014458&r=1',
      amazonLink: 'http://www.amazon.com/Atlas-Science-Visualizing-What-Know/dp/0262014459/ref=sr_1_1?ie=UTF8&qid=1400082763&sr=8-1&keywords=atlas+of+science',
      slug: 'atlas-of-science'
    },
    {
      title: 'Atlas of Knowledge: Anyone Can Map',
      author: 'Katy Börner',
      publisher: 'MIT Press',
      abstract: 'In an age of information overload, the ability to make sense of vast amounts of data and to render insightful visualizations is as important as the ability to read and write. The Atlas of Knowledge explains and exemplifies the power of visualizations not only to help locate us in physical space but also to help us understand the extent and structure of our collective knowledge, to identify bursts of activity, pathways of ideas, and borders that beg to be crossed.',
      pdfLink: 'https://www.barnesandnoble.com/w/atlas-of-knowledge-katy-b-rner/1120681679?ean=9780262028813',
      amazonLink: 'https://www.amazon.com/Atlas-Knowledge-Anyone-Can-Press/dp/0262028816/ref=sr_1_2?ie=UTF8&qid=1471440921&sr=8-2&keywords=atlas+of+science',
      slug: 'atlas-of-knowledge'
    },
    {
      title: 'Visual Insights: A Practical Guide to Making Sense of Data',
      author: 'Katy Börner & David E. Polley',
      publisher: 'MIT Press',
      abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla pellentesque dolor. Nunc vehicula quis sapien vitae pellentesque. Donec vitae ante pharetra ex cursus ullamcorper vitae vel leo. Ut eget est cursus, euismod dolor in, consequat enim. Fusce pellentesque purus est, at pharetra sem rutrum sed. Nam a massa vitae sapien tristique feugiat malesuada dignissim massa. Nam magna dolor, semper ac neque a, pharetra porta ante. Fusce scelerisque ligula neque, sit amet ornare arcu porttitor a. Phasellus lectus elit, molestie a leo sed, vulputate viverra urna. Nullam tristique elementum nisi sed sagittis. Ut felis turpis, luctus volutpat ornare ut, auctor at mi. Donec blandit tincidunt orci, at aliquam quam interdum eu. Suspendisse ac consectetur sem. Nulla sit amet ex id orci viverra ullamcorper. Phasellus tempus pharetra nisl quis consectetur. Quisque eget efficitur magna, ut euismod nunc. Praesent et euismod diam. Etiam ac lacinia diam. Aenean vel eleifend nulla. Nam fringilla mi sed cursus aliquet. Ut ac nisi non augue gravida faucibus a et mauris. Maecenas semper condimentum sapien venenatis maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec aliquam ex sit amet nisi fermentum, in feugiat purus commodo. Aenean tristique ligula non neque lobortis semper. Sed vel ex turpis. \nEtiam ut feugiat enim. Sed et lacus a diam pellentesque venenatis in quis metus. Nam placerat ex eu gravida eleifend. Cras leo nulla, semper in turpis at, tincidunt ullamcorper sapien. Aenean dignissim, velit ac scelerisque egestas, quam odio tempor augue, ut sollicitudin nulla quam in tortor. Nunc condimentum et nisl id fermentum. Praesent eget lectus elementum, gravida erat vel, venenatis sem. Donec aliquam mauris odio, vel imperdiet ex suscipit id. Donec sed enim elementum, lobortis metus eu, tempor quam. Aenean lorem ex, mattis ac velit non, lacinia porta tellus. Fusce non augue eget justo volutpat pharetra a vitae odio. Pellentesque ac enim lacus.\nMauris ut facilisis diam. Nunc a augue venenatis, maximus lacus sit amet, fermentum nulla. Sed vitae quam augue. Aenean leo urna, fringilla sed orci vel, faucibus malesuada tellus. Curabitur id lacus mi. Nullam pulvinar tortor metus, sit amet faucibus lorem imperdiet dictum. Duis maximus convallis ex nec mollis. Quisque at ultrices purus, nec tempus libero. Duis orci dolor, varius in maximus id, ullamcorper eget turpis. Integer quis posuere lectus, sit amet varius ante. Duis turpis risus, malesuada in tellus a, ultrices rhoncus lacus. Morbi dapibus consectetur diam, quis faucibus metus pharetra in. Nulla imperdiet arcu a metus euismod placerat. Sed id mi in tellus fringilla volutpat at non mi. Aenean ut blandit diam. Sed vehicula, justo et cursus elementum, turpis ante cursus libero, sit amet lacinia ligula ante vel sem.',
      pdfLink: 'http://www.barnesandnoble.com/w/visual-insights-katy-b-rner/1117270498?ean=9780262526197',
      amazonLink: 'http://www.amazon.com/Visual-Insights-Practical-Guide-Making/dp/0262526190/ref=sr_1_1?ie=UTF8&qid=1384193730&sr=8-1&keywords=visual+insights+a+practical+guide',
      slug: 'visual-insights'
    }
  ];
}
