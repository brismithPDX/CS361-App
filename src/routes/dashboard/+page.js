/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    return {
        post: {
            DateTime: "[This will contain a time stamp]",
            MicroServiceRequestValues: "[REQUESTED MICROSERVICE DATA WILL ARRIVE HERE]",
            Internal_Data:"This field can contan other internal data"
        },
        error_post: {
            ERROR_CODE: "[This will contain a ERROR CODE]",
            ERROR_MSG: "[This would continain a human readable error message"
        }
    };
}