'use strict';

exports.handler = (event, context, callback) => {
    const request = event.Records[0].cf.request;
    const headers = request.headers;

    // Redirects section
    if (request.uri === '/corporate-social-responsibility' || request.uri === '/csr') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/jetblue-for-good',
                }],
            },
        };
        callback(null, response);
        return;
    }

    if (request.uri === '/corporate-social-responsibility/military' || request.uri === '/csr/military') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/jetblue-for-good/military',
                }],
            },
        };
        callback(null, response);
        return;
    }

    if (request.uri === '/corporate-social-responsibility/military/vets' || request.uri === '/csr/military/vets') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/jetblue-for-good/military/veterans',
                }],
            },
        };
        callback(null, response);
        return;
    }

    if (request.uri === '/corporate-social-responsibility/youth-education' || request.uri === '/csr/youth-education') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/jetblue-for-good/youth-education/',
                }],
            },
        };
        callback(null, response);
        return;
    }

    if (request.uri === '/corporate-social-responsibility/youth-education/article-1' || request.uri === '/corporate-social-responsibility/youth-education/article-1/' || request.uri === '/csr/youth-education/article-1') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/jetblue-for-good/youth-education/soar-with-reading',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 6

    if (request.uri === '/corporate-social-responsibility/youth-education/article-2' || request.uri === '/corporate-social-responsibility/youth-education/article-2/' || request.uri === '/csr/youth-education/article-2') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/jetblue-for-good/youth-education/first-book-partnership',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 7

    if (request.uri === '/corporate-social-responsibility/youth-education/article-3' || request.uri === '/corporate-social-responsibility/youth-education/article-3' || request.uri === '/csr/youth-education/article-3') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/jetblue-for-good/youth-education/stem-education-for-youth',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 8

    if (request.uri === '/corporate-social-responsibility/youth-education/article-4' || request.uri === '/corporate-social-responsibility/youth-education/article-4' || request.uri === '/csr/youth-education/article-4') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/jetblue-for-good/youth-education/jetblue-foundation-support-for-stem-education',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 9

    if (request.uri === '/corporate-social-responsibility/community' || request.uri === '/csr/community') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/jetblue-for-good/community',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 10

    if (request.uri === '/corporate-social-responsibility/community/article-1' || request.uri === '/csr/community/article-1') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/jetblue-for-good/community/jetblue-community-connection',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 11

    if (request.uri === '/corporate-social-responsibility/community/article-2' || request.uri === '/csr/community/article-2') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/jetblue-for-good/community/kaboom-partnership',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 12

    if (request.uri === '/corporate-social-responsibility/community/article-3' || request.uri === '/csr/community/article-3') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/jetblue-for-good/community/crew-member-volunteerism',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 13 

    if (request.uri === '/corporate-social-responsibility/community/article-4' || request.uri === '/csr/community/article-3') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/jetblue-for-good/community/dream-project-partnership',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 14 

    if (request.uri === '/corporate-social-responsibility/environment' || request.uri === '/csr/environment') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/jetblue-for-good/environment',
                }],
            },
        };

        callback(null, response);
        return;
    }
    // 15

    if (request.uri === '/corporate-social-responsibility/environment/article-1' || request.uri === '/csr/environment/article-1') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/jetblue-for-good/environment/one-thing-that-is-green',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 16

    if (request.uri === '/corporate-social-responsibility/environment/article-2' || request.uri === '/csr/environment/article-2') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/jetblue-for-good/environment/recycling',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 17

    if (request.uri === '/corporate-social-responsibility/environment/article-3' || request.uri === '/csr/environment/article-3') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/jetblue-for-good/environment/rooftop-farm-at-t5-terminal-jfk',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 18

    if (request.uri === '/corporate-social-responsibility/environment/article-4' || request.uri === '/csr/environment/article-4' ) {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/jetblue-for-good/environment/corporate-citizenship',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 19

    if (request.uri === '/corporate-social-responsibility/giving' || request.uri === '/csr/giving') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/jetblue-for-good/giving',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 20

    if (request.uri === '/corporate-social-responsibility/giving/article-1' || request.uri === '/csr/giving/article-1' ) {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/jetblue-for-good/giving/a-hole-in-one-for-charity',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 21

    if (request.uri === '/corporate-social-responsibility/giving/article-2' || request.uri === '/csr/giving/article-2') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/jetblue-for-good/giving/inspiring-humanity-in-fort-lauderdale',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 22

    if (request.uri === '/corporate-social-responsibility/giving/article-3' || request.uri === '/csr/giving/article-3') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/jetblue-for-good/giving/trueblue-points-donation-platform',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 23 

    if (request.uri === '/corporate-social-responsibility/giving/article-4' || request.uri === '/csr/giving/article-4') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/jetblue-for-good/giving/requesting-points-for-your-charity',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 24 

    if (request.uri === '/corporate-social-responsibility/jetblue-foundation' || request.uri === '/csr/jetblue-foundation') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/jetblue-for-good/jetblue-foundation',
                }],
            },
        };

        callback(null, response);
        return;
    }
    // 25

    if (request.uri === '/travel/kids') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/traveling-together/traveling-with-kids',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 26

    if (request.uri === '/travel/pets') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/traveling-together/traveling-with-pets',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 27

    if (request.uri === '/vacations/jetblue-vacations-terms') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/vacations/terms-conditions',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 28

    if (request.uri === '/wherewejet/' || request.uri === '/wherewejet') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/route-map',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 29

    if (request.uri === '/green/sustainable-operations/') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/sustainability/sustainable-operations',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 30

    if (request.uri === '/green/nature/') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/sustainability/sustainable-tourism',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 31

    if (request.uri === '/green/sustainability/' || request.uri === '/green/climate-change/' || request.uri === '/green/climate/') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/sustainability/climate-leadership/',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 32

    if (request.uri === '/veterans-benefits') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/flying-with-us/military-customers/',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 33 

    if (request.uri === '/travel-insurance') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/customer-assurance/travel-insurance',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 34 

    if (request.uri === '/traveldeals/veterans-discount') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/flying-with-us/military-customers/veteran-discount',
                }],
            },
        };

        callback(null, response);
        return;
    }
    // 35

    if (request.uri === '/travel/special-assistance/wheelchair-assistance') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/at-the-airport/special-assistance/wheelchair',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 36

    if (request.uri === '/travel/special-assistance/service-animal') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/at-the-airport/special-assistance/service-dogs-animals',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 37

    if (request.uri === '/travel/special-assistance/medical-conditions') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/at-the-airport/special-assistance/medical-conditions',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 38

    if (request.uri === '/travel/special-assistance/complaint-resolution') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/at-the-airport/special-assistance/complaint-resolution',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 39

    if (request.uri === '/travel/special-assistance/cognitive-disabilities') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/at-the-airport/special-assistance/cognitive-disabilities',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 40

    if (request.uri === '/travel/special-assistance/boarding-process') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/at-the-airport/special-assistance/boarding-process',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 41

    if (request.uri === '/travel/special-assistance/additional-information') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/at-the-airport/special-assistance/additional-information',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 42

    if (request.uri === '/travel/special-assistance') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/at-the-airport/special-assistance',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 43 

    if (request.uri === '/travel/precheck') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/at-the-airport/tsa-precheck',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 44 

    if (request.uri === '/travel/pets') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/traveling-together/traveling-with-pets',
                }],
            },
        };

        callback(null, response);
        return;
    }
    // 45

    if (request.uri === '/travel/our-fares') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/flying-with-us/our-fares/',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 46

    if (request.uri === '/travel/lounge-access') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/travel/international-travel/lounge-access/',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 47

    if (request.uri === '/travel/kiosk-check-in-and-self-tagging') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/at-the-airport/check-in-kiosks',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 48

    if (request.uri === '/travel/kids') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/traveling-together/traveling-with-kids',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 49

    if (request.uri === '/travel/jfk') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/at-the-airport/terminal-5-at-jfk',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 50

    if (request.uri === '/travel/international-travel') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/at-the-airport/international-travel',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 51

    if (request.uri === '/travel/groups') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/traveling-together/group-travel+E8',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 52

    if (request.uri === '/travel/cancellations-delays') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/customer-assurance/cancellations-delays',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 53 

    if (request.uri === '/travel/baggage') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/at-the-airport/baggage-information',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 54 

    if (request.uri === '/travel/airports') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/at-the-airport/airport-information',
                }],
            },
        };

        callback(null, response);
        return;
    }
    // 55

    if (request.uri === '/travel') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/at-the-airport',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 56

    if (request.uri === '/plan-a-trip') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 57

    if (request.uri === '/green/reporting') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/sustainability/reporting',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 58

    if (request.uri === '/green') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/sustainability',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 59

    if (request.uri === '/flying-on-jetblue/wifi') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/flying-with-us/wi-fi-fly-fi',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 60

    if (request.uri === '/flying-on-jetblue/snacks-and-drinks/nutrition-facts') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/flying-with-us/snacks-drinks/nutritional-information',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 61

    if (request.uri === '/flying-on-jetblue/snacks-and-drinks') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/flying-with-us/snacks-drinks',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 62

    if (request.uri === '/flying-on-jetblue/shut-eye') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/flying-with-us/shut-eye-service',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 63 

    if (request.uri === '/flying-on-jetblue/radio') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/flying-with-us/siriusxm-radio',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 64 

    if (request.uri === '/flying-on-jetblue/movies') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/flying-with-us/movies-and-more',
                }],
            },
        };

        callback(null, response);
        return;
    }
    // 65

    if (request.uri === '/flying-on-jetblue/mint') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/flying-with-us/mint',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 66

    if (request.uri === '/flying-on-jetblue/even-more') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/flying-with-us/even-more',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 67

    if (request.uri === '/flying-on-jetblue/directv') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/flying-with-us/directv',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 68 

    if (request.uri === '/flying-on-jetblue/customer-protection') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/customer-assurance/our-promise',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 69

    if (request.uri === '/corporate-social-responsibility/youth-education') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/jetblue-for-good/youth-education',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 70

    if (request.uri === '/corporate-social-responsibility/military/vets') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/military/veterans',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 71

    if (request.uri === '/corporate-social-responsibility/military') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/military',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 72

    if (request.uri === '/corporate-social-responsibility/jetblue-foundation') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/jetblue-for-good/jetblue-foundation',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 73 

    if (request.uri === '/corporate-social-responsibility/giving/article-4') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/jetblue-for-good/giving/requesting-points-for-your-charity',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 74 

    if (request.uri === '/corporate-social-responsibility/giving/article-3') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/jetblue-for-good/giving/trueblue-points-donation-platform',
                }],
            },
        };

        callback(null, response);
        return;
    }
    // 75

    if (request.uri === '/corporate-social-responsibility/giving/article-2') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/jetblue-for-good/giving/inspiring-humanity-in-fort-lauderdale',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 76

    if (request.uri === '/flightstatus') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/flight-tracker-and-status/',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 77

    if (request.uri === '/vacations') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/vacations/#/',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 78

    if (request.uri === '/p/JetBlue-Foundation-Grant-Guidelines.pdf') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/jetblue-for-good/jetblue-foundation/grant-guidelines',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 79

    if (request.uri === '/flying-on-jetblue') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/flying-with-us',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 80

    if (request.uri === '/business-travel') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/flying-with-us/business-travel',
                }],
            },
        };

        callback(null, response);
        return;
    }




    // 81

    if (request.uri === '/congrats') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/deals/take-20-off/',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 82

    if (request.uri === '/manageflights/flightnotification') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/flight-tracker-and-status',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 83 

    if (request.uri === '/santander') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/jetblue/',
                }],
            },
        };

        callback(null, response);
        return;
    }
    // 84

    if (request.uri === '/travel-agents/cuba') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/travel-agents/international-policy/',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 85

    if (request.uri === '/mobile/iphone/pages/boxed-meals.html') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/flying-with-us/snacks-drinks/',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 86

    if (request.uri === '/about') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/our-company/',
                }],
            },
        };

        callback(null, response);
        return;
    }

    // 87

    if (request.uri === '/baggage') {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: '/at-the-airport/baggage-information/',
                }],
            },
        };

        callback(null, response);
        return;
    }

    callback(null, request);
};
