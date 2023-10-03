export const layerMenuItems = [
            {
                title: 'Dense',
            },
        
            {
                title: 'Special',
                submenu: [
                    {
                        title: 'Activation',
                    },
                    {
                        title: 'Embedding',
                    },
                    {
                        title: 'Masking',
                    },
                    {
                        title: 'Lambda',
                    },
                ]

            },
        
            {
                title: 'Convolutional',
                submenu: [
                    {
                        title: 'Conv1D',
                        submenu: [
                            {
                                title: 'Default',
                                type: 'Conv1D',
                            },
                            {
                                title: 'Separable',
                                type: 'SeparableConv1D',
                            },
                            {
                                title: 'Transpose',
                                type: 'Conv1DTranspose',
                            },
                        ],
                    },

                    {
                        title: 'Conv2D',
                        submenu: [
                            {
                                title: 'Default',
                                type: 'Conv2D',
                            },
                            {
                                title: 'Separable',
                                type: 'SeparableConv2D',
                            },
                            {
                                title: 'Depthwise',
                                type: 'DepthwiseConv2D',
                            },
                            {
                                title: 'Transpose',
                                type: 'Conv2DTranspose',
                            },
                        ],
                    },
                    {
                        title: 'Conv3D',
                        submenu: [
                            {
                                title: 'Default',
                                type: 'Conv3D',
                            },
                            {
                                title: 'Transpose',
                                type: 'Conv3DTranspose',
                            },
                        ],
                    },
                ]
            },
        
            {
                title: 'Pooling',
            },
        
            {
                title: 'Recurrent'
            },
        
            {
                title: 'Preprocessing'
            },
        
            {
                title: 'Normalization'
            },
        
            {
                title: 'Regularization'
            },
        
            {
                title: 'Other'
            },
];

// https://blog.logrocket.com/how-create-multilevel-dropdown-menu-react/