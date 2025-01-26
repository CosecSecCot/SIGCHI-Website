export async function POST(request: Request) {
    try {
        const formDataAsText = await request.text();

        console.log(formDataAsText);

        const raw = await fetch(process.env.GOOGLE_SHEETS_URL!, {
            method: "POST",
            body: formDataAsText,
            headers: {
                "Content-Type": "text/plain",
            },
        });

        const res = await raw.json();
        console.log(res);
    } catch (error) {
        console.log(error);
        return new Response(
            JSON.stringify({ status: "error", message: JSON.stringify(error) }),
            {
                status: 400,
            }
        );
    }

    return new Response(JSON.stringify({ status: "success" }), {
        status: 200,
    });
}
