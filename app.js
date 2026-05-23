// বিভিন্ন সামগ্ৰীৰ ডেমো ডাটা (Meesho, Amazon, Flipkart-ৰ মূল্যৰ সৈতে)
const productsData = {
    "tshirt": [
        { store: "Meesho", price: 199, rating: "4.1 ⭐", link: "https://www.meesho.com" },
        { store: "Amazon", price: 349, rating: "4.3 ⭐", link: "https://www.amazon.in" },
        { store: "Flipkart", price: 299, rating: "4.0 ⭐", link: "https://www.flipkart.com" }
    ],
    "mobile": [
        { store: "Meesho", price: 11999, rating: "3.9 ⭐", link: "https://www.meesho.com" },
        { store: "Amazon", price: 10999, rating: "4.4 ⭐", link: "https://www.amazon.in" },
        { store: "Flipkart", price: 11499, rating: "4.2 ⭐", link: "https://www.flipkart.com" }
    ],
    "smartwatch": [
        { store: "Meesho", price: 499, rating: "4.0 ⭐", link: "https://www.meesho.com" },
        { store: "Amazon", price: 1299, rating: "4.3 ⭐", link: "https://www.amazon.in" },
        { store: "Flipkart", price: 999, rating: "4.1 ⭐", link: "https://www.flipkart.com" }
    ]
};

// ছাৰ্চ কৰা ফল দেখুওৱা মেইন ফাংচন
function searchProduct() {
    const input = document.getElementById("searchInput").value.toLowerCase().trim();
    const resultsDiv = document.getElementById("results");
    
    // বক্স খালী থাকিলে মেচেজ দেখুৱাব
    if (input === "") {
        resultsDiv.innerHTML = "<p style='color:red;'>অনুগ্ৰহ কৰি কিবা এটা সামগ্ৰীৰ নাম লিখক!</p>";
        return;
    }

    resultsDiv.innerHTML = "<h3>সন্ধান কৰি থকা হৈছে...</h3>";

    // আমাৰ ডাটাবেচত বস্তুতো আছে নে নাই পৰীক্ষা কৰা
    if (productsData[input]) {
        let items = productsData[input];
        
        // কম দামৰ পৰা বেছি দামলৈ সজোৱা (Sort Low to High)
        items.sort((a, b) => a.price - b.price);

        let htmlContent = `<h3>"${input.toUpperCase()}" ৰ বাবে আটাইতকৈ কম দামৰ তালিকা:</h3>`;
        
        items.forEach(item => {
            htmlContent += `
                <div style="background: white; padding: 15px; margin: 10px auto; max-width: 500px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); display: flex; justify-content: space-between; align-items: center;">
                    <div style="text-align: left;">
                        <strong style="font-size: 18px; color: #333;">${item.store}</strong>
                        <p style="margin: 5px 0 0 0; color: #777;">Rating: ${item.rating}</p>
                    </div>
                    <div>
                        <span style="font-size: 20px; font-weight: bold; color: #28a745; margin-right: 15px;">₹${item.price}</span>
                        <a href="${item.link}" target="_blank" style="background: #007bff; color: white; padding: 8px 12px; text-decoration: none; border-radius: 5px; font-size: 14px;">বজাৰ কৰক</a>
                    </div>
                </div>
            `;
        });
        
        resultsDiv.innerHTML = htmlContent;
    } else {
        resultsDiv.innerHTML = `<p style='color:orange;'>দুঃখিত! বৰ্তমান কেৱল "tshirt", "mobile", বা "smartwatch" ছাৰ্চ কৰক। বাকী কেটেগৰী অতি সোনকালে যোগ কৰা হ’ব!</p>`;
    }
}
