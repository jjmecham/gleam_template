export default {
    name: 'gallery',
    title: 'Gallery',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
    
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
      {
        name: 'projectLink',
        title: 'Project Link',
        type: 'string',
      },
      {
        name: 'codeLink',
        title: 'Code Link',
        type: 'string',
      },
      {
        name: 'images',
        title: 'Images',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      // {
      //   name: 'images',
      //   title: 'Images',
      //  type:'array',
      //  of: [
      //    {
      //     type: 'image', name: 'image',
      //       options: {
      //        hotspot: true,
      //       },
      //    }
      //  ]
      // },
      
      {
        name: 'categories',
        title: 'Tags',
       type:'array',
       of: [
         {
          type: 'reference', to: {type: 'category'}
         }
       ]
      },
     
    ],
  };