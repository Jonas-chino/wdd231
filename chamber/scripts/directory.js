const membersContainer = document.getElementById('members');


async function loadMembers() {
    try {
        const response = await fetch('data/members.json');
        
        if (!response.ok) {
            throw new Error('Failed to load members');
        }
        
        const data = await response.json();
        displayMembers(data.members);
        
    } catch (error) {
        membersContainer.innerHTML = `
            <div class="error">
                <h2>Error Loading Members</h2>
                <p>${error.message}</p>
            </div>
        `;
    }
}

function displayMembers(member) {
    membersContainer.innerHTML = '';
    
    member.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'member-card';
        memberCard.innerHTML =  `
        <img src="images/${member.image}" alt="Logo of ${member.name}" loading="lazy">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visitar Web</a>
        `;
        
        membersContainer.appendChild(memberCard);
    });
}
loadMembers(); 
