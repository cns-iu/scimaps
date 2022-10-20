# SciMaps website

- Production: <https://dev.scimaps.org/>
- Staging: <https://scimaps.netlify.app/>

# Instructions to Run Locally

<ol>
<li> Uncomment local_backend=true from config.yml (DO NOT COMMIT).</li>
<li> Run 'npx netlify-cms-proxy-server' from root.</li>
<li> Run 'npm start' from root->content-migrator.</li>
<ol>
<li> If running for the first time, run 'npm ci' in root->content-migrator.</li>
</ol>
<li> Run 'npm start' from root->website.</li>
<ol>
<li> If running for the first time, run 'npm ci' in root->website.</li>
</ol>
<li> Run 'npx http-server' from root.</li>
<li> Go to 'localhost:8080/admin' on web browser</li>
<li> Make desired changes in the tool.</li>
<li> Check results on 'localhost:4200'.</li>
<li> Comment local_backend=true from config.yml</li>
<li> Commit, Push and create Pull Request.</li>
</ol>
