import React from 'react'
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';

function CustomFooter() {
    return (
        <div>
            <Footer
                backgroundColor="#161625"
                columns={[
                    {
                        title: 'Get to know us.',
                        items: [
                            {
                                title: "Careers",
                            },
                            {
                                title: "Amazon and Our Planet",
                            },
                            {
                                title: "Investor Relations",
                            },
                            {
                                title: "Press Releases",
                            }

                        ]
                    },
                    {
                        title: 'Make Money with Us',
                        items: [
                            {
                                title: "Sell on Amazon",
                            },
                            {
                                title: "Sell Under Amazon Accelerator",
                            },
                            {
                                title: "Amazon Associates",
                            },
                            {
                                title: "Host on Amazon Hub",
                            }

                        ]
                    },
                    {
                        title: 'Amazon Payment Products',
                        items: [
                            {
                                title: "Amazon.ca Rewards Mastercard",
                            },
                            {
                                title: "Shop with Points",
                            },
                            {
                                title: "Reload your balance",
                            },
                            {
                                title: "Amazon cash",
                            }

                        ]
                    },
                    {
                        title: 'Let Us Help You',
                        items: [
                            {
                                title: "COVID-19 and Amazon",
                            },
                            {
                                title: "Shipping Rates & Policies",
                            },
                            {
                                title: "Amazon Prime",
                            },
                            {
                                title: "Customer Service",
                            }

                        ]
                    }
                ]}
                bottom="Made with ❤️ by AFX"
            />,

        </div>
    )
}

export default CustomFooter
