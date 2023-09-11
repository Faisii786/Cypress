//Test code for searching a youtube channel and plays its very first video

describe('YouTube Channel Search and Video Play', () => {
  it('Should search for wscubetech channel and play its first video', () => {
    cy.visit('https://www.youtube.com');

    // Enter the search query and submit the search
    cy.get('input#search').type('wscubetech{enter}');

    // Wait for the search results to load
    cy.get('ytd-video-renderer').should('be.visible');

    // Click on the first video from the search results
    cy.get('ytd-video-renderer').first().find('#thumbnail').click();

    // Wait for the video to start playing
    cy.get('.html5-video-container').should('be.visible');
  });
});

